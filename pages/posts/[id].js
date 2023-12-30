import Layout from '../../components/layout';
import { getAllPostIds, getAllStrapiPostIds, getPostData, getStrapiPostData, fetchStrapiData, fetchStrapiPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';




export async function getStaticPaths() {
    const allStrapiData = await fetchStrapiData('api/posts');
    const paths = allStrapiData.map((post) => ({
      params: {id: post.id.toString()}
    }));

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const strapiPostData = await fetchStrapiPostData(`api/posts/${params.id}`);
    return {
        props: {
        strapiPostData,
        },
    };
}

export default function Post({ strapiPostData }) {
  console.log(strapiPostData);

  return (
    <Layout>
      <Head>
        <title>{strapiPostData.attributes.Title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{strapiPostData.attributes.Title}</h1>
        <div className={utilStyles.lightText}>
        {strapiPostData.attributes.PublishedDate}
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: strapiPostData.attributes.Content}} /> */}
        <p>{strapiPostData.attributes.Content}</p>
      </article>
    </Layout>
  );
}
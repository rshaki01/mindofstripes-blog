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
    console.log(params);
    const strapiPostData = await fetchStrapiPostData('api/posts/1');
    return {
        props: {
        strapiPostData,
        },
    };
}

export default function Post({ strapiPostData }) {

  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}></h1>
        <div className={utilStyles.lightText}>
            
        </div>
       
      </article>
    </Layout>
  );
}
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { fetchStrapiData, getAllStrapiPostIds } from '../lib/posts';
import axios from 'axios';


export async function getStaticProps() {
  const allStrapiData = await fetchStrapiData('api/posts');
  // const allPostsData = getSortedPostsData();
  return {
    props: {
      // allPostsData,
      allStrapiData
    },
  }
}

export default function Home({allStrapiData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[This is a blog for mindofstripes]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="https://nextjs.org/learn">Link</Link>.)
        </p>
      </section>

      {/* Generate a list of posts from markdown files */}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
          </li>
          ))}
        </ul>
      </section> */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allStrapiData.map(({id, attributes}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{attributes.Title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {attributes.PublishedDate}
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
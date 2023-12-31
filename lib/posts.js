// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html'
import axios from 'axios';

// Define the URL of your Strapi API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch data from Strapi
export async function fetchStrapiData(endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching data from Strapi:'", error);
    return null;
  }
}

export async function fetchStrapiPostData(endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching data from Strapi:'", error);
    return null;
  }
}

// export async function getAllStrapiPostIds() {
//   const allStrapiData = await fetchStrapiData('api/posts');
//   const paths = allStrapiData.map((post) => ({
//     params: {slug: post.id}
//   }));

//   return {
//     paths
//   }
// }

export async function getStrapiPostData(id) {

}


// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   // ]
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ''),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }

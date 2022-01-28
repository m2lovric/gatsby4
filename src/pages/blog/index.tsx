import * as React from 'react';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import db from '../../db';
import { collection, getDocs } from 'firebase/firestore';
import BlogArticle from '../components/blogArticle';
import { Link } from 'gatsby';

export interface BlogData {
  id: string;
  title: string;
  author: string;
  content: string;
}

const BlogPage = () => {
  const [data, setData] = React.useState<BlogData[]>([]);

  useEffect(() => {
    const colRef = collection(db, 'blogs');

    getDocs(colRef)
      .then((snapshot) => {
        let blogs = [];
        snapshot.docs.forEach((doc) => {
          blogs.push({ ...doc.data(), id: doc.id });
        });
        setData(blogs);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Layout pageTitle='Blog'>
      <p>React | Typescript | Firebase</p>
      {data.map((blog) => (
        <Link to={'/blog/' + blog.id}>
          <BlogArticle blogContent={blog} key={blog.id} />
        </Link>
      ))}
    </Layout>
  );
};

export default BlogPage;

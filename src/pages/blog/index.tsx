import * as React from 'react';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
//import BlogArticle from '../components/blogArticle';
import { Link } from 'gatsby';

export interface BlogData {
  id: string;
  title: string;
  author: string;
  content: string;
}

const IndexPage = () => {
  const [data, setData] = useState<BlogData[]>([]);

  useEffect(() => {
    const colRef = collection(db, 'blogs');

    onSnapshot(colRef, (snapshot) => {
      let blogs = [];
      snapshot.docs.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id });
      });
      setData(blogs);
    });
  }, []);

  return (
    <Layout pageTitle='Blog'>
      <p>React | Typescript | Firebase</p>
      {data.map((blog) => (
        <Link to={'/blog/' + blog.id} key={blog.id}>
          <h2>{blog.title}</h2>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;

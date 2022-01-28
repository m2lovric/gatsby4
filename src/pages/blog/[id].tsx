import { collection, getDocs } from 'firebase/firestore';
import * as React from 'react';
import { useEffect } from 'react';
import { BlogData } from '.';
import db from '../../db';
import Layout from '../components/layout';

const BlogPage = ({ params }) => {
  const id = params['id'];

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
        console.log(blogs);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const blogContent = data.filter((el) => el.id === id)[0];

  data && console.log(blogContent);

  return (
    <Layout>
      <h2>Blog Detials</h2>
      {data && blogContent && (
        <>
          <h2>{blogContent.title}</h2>
          <p>{blogContent.author}</p>
          <p>{blogContent.content}</p>
        </>
      )}
    </Layout>
  );
};

export default BlogPage;

import { doc, getDoc } from 'firebase/firestore';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BlogData } from './index';
import { db } from '../../firebase';
import Layout from '../components/layout';

const BlogPage = ({ params }) => {
  const id = params['id'];

  const [data, setData] = useState<BlogData>(undefined);

  useEffect(() => {
    const docRef = doc(db, 'blogs', id);

    getDoc(docRef).then((doc) => {
      const document = doc.data() as BlogData;
      setData(document);
    });
  }, []);

  return (
    <Layout>
      <h2>Blog Detials</h2>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.author}</p>
          <p>{data.content}</p>
        </>
      )}
    </Layout>
  );
};

export default BlogPage;

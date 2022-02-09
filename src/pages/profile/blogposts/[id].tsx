import { doc, getDoc } from 'firebase/firestore';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BlogData } from '../../blog/index';
import { db } from '../../../firebase';
import Layout from '../../../components/layout';

const EditBlogPost = ({ params }) => {
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
      <h2>Edit Blog</h2>
      {data && (
        <>
          <input type='text' placeholder={data.title} />
          <textarea></textarea>
        </>
      )}
    </Layout>
  );
};

export default EditBlogPost;

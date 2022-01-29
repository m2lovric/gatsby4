import * as React from 'react';
import { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from './components/layout';
import db from '../db';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const IndexPage = () => {
  useEffect(() => {
    const colRef = collection(db, 'blogs');

    onSnapshot(colRef, (snapshot) => {
      let blogs = [];
      snapshot.docs.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id });
      });
      console.log(blogs);
    });
  }, []);

  return (
    <Layout pageTitle='Develop...'>
      <StaticImage src='../images/develop.jpeg' alt='keyboard' />
      <p>Matteo Lovric 2022</p>
    </Layout>
  );
};

export default IndexPage;

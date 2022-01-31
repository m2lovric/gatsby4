import * as React from 'react';
import { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from './components/layout';
import { db, auth } from '../db';
import { collection, onSnapshot } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const IndexPage = () => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

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

  const signUpForm = document.querySelector('.signup');
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, username, password);
  });

  return (
    <Layout pageTitle='Develop...'>
      <StaticImage src='../images/develop.jpeg' alt='keyboard' />
      <p>Matteo Lovric 2022</p>
      <form className='signup'>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Signup</button>
      </form>
    </Layout>
  );
};

export default IndexPage;

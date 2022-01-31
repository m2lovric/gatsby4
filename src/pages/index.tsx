import * as React from 'react';
import { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from './components/layout';
import { db } from '../db';
import { collection, onSnapshot } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const IndexPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

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

  signUpForm &&
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(username, password);
      createUserWithEmailAndPassword(auth, username, password)
        .then((userCred) => {
          const user = userCred.user;
          console.log(user);
          setUsername('');
          setPassword('');
        })
        .catch((err) => console.log(err.message));
    });
  return (
    <Layout pageTitle='Develop...'>
      <StaticImage src='../images/develop.jpg' alt='keyboard' />

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
      <p>Matteo Lovric 2022</p>
    </Layout>
  );
};

export default IndexPage;

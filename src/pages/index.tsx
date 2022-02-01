import * as React from 'react';
import { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './components/layout';
import { db } from '../db';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const IndexPage = () => {
  const [signupData, setSignupData] = useState({ username: '', password: '' });
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  db;
  const auth = getAuth();

  const signUpForm = document.querySelector('.signup');
  const loginForm = document.querySelector('.login');

  signUpForm &&
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(
        auth,
        signupData.username,
        signupData.password
      )
        .then((cred) => {
          const user = cred.user;
          console.log('Signed up:' + user);
          setSignupData({ username: '', password: '' });
        })
        .catch((err) => err);
    });

  loginForm &&
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, loginData.username, loginData.password)
        .then((cred) => {
          const user = cred.user;
          console.log('Logged in:' + user);
          setLoginData({ username: '', password: '' });
        })
        .catch((err) => err);
    });

  const logout = document.querySelector('.logout');
  logout &&
    logout.addEventListener('click', () => {
      signOut(auth).then(() => {
        console.log('logged out');
      });
    });

  return (
    <Layout pageTitle='Develop...'>
      <StaticImage src='../images/develop.jpg' alt='keyboard' />

      <form className='signup'>
        <input
          type='text'
          value={signupData.username}
          onChange={(e) =>
            setSignupData({ ...signupData, username: e.target.value })
          }
          placeholder='Username'
        />
        <input
          type='password'
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
          placeholder='Password'
        />
        <button type='submit'>Signup</button>
      </form>

      <form className='login'>
        <input
          type='text'
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
          placeholder='Username'
        />
        <input
          type='password'
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeholder='Password'
        />
        <button type='submit'>Login</button>
      </form>

      <button className='logout'>Logout</button>
      <p>Matteo Lovric 2022</p>
    </Layout>
  );
};

export default IndexPage;

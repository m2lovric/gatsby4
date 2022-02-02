import * as React from 'react';
import { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const IndexPage = () => {
  useEffect(() => {
    const signUpForm: HTMLFormElement = document.querySelector('.signup');
    const loginForm: HTMLFormElement = document.querySelector('.login');

    const usernameSignInput: HTMLInputElement = signUpForm.username;
    const passwordSignInput: HTMLInputElement = signUpForm.password;
    const usernameLoginInput: HTMLInputElement = loginForm.username;
    const passwordLoginInput: HTMLInputElement = loginForm.password;

    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(
        auth,
        usernameSignInput.value,
        passwordSignInput.value
      )
        .then((cred) => {
          const user = cred.user;
          console.log(user);
          signUpForm.reset();
        })
        .catch((err) => console.log(err.message));
    });

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(
        auth,
        usernameLoginInput.value,
        passwordLoginInput.value
      )
        .then((cred) => {
          const user = cred.user;
          console.log(user);
          loginForm.reset();
        })
        .catch((err) => console.log(err.message));
    });

    const logout = document.querySelector('.logout');
    logout.addEventListener('click', () => {
      signOut(auth).then(() => {
        console.log('logged out');
      });
    });
  }, []);

  return (
    <Layout pageTitle='Develop...'>
      <StaticImage src='../images/develop.jpg' alt='keyboard' />

      <form className='signup'>
        <input type='text' name='username' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Signup</button>
      </form>

      <form className='login'>
        <input type='text' name='username' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>

      <button className='logout'>Logout</button>
      <p>Matteo Lovric 2022</p>
    </Layout>
  );
};

export default IndexPage;

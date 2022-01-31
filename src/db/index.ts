import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: 'blog-ts-gatsby.firebaseapp.com',
  projectId: 'blog-ts-gatsby',
  storageBucket: 'blog-ts-gatsby.appspot.com',
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID,
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };

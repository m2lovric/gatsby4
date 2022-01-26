import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'blog-ts-gatsby.firebaseapp.com',
  projectId: 'blog-ts-gatsby',
  storageBucket: 'blog-ts-gatsby.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;

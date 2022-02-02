import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: 'blog-ts-gatsby.firebaseapp.com',
  projectId: 'blog-ts-gatsby',
  storageBucket: 'blog-ts-gatsby.appspot.com',
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID,
};

let app: FirebaseApp;

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const auth = getAuth(app);

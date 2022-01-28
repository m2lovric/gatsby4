import * as React from 'react';
import { useEffect } from 'react';
import Layout from './components/layout';
import { addDoc, collection } from 'firebase/firestore';
import './add.scss';
import db from '../db';

const AddBlog = () => {
  useEffect(() => {
    const colRef = collection(db, 'blogs');

    const addBlogForm: HTMLFormElement = document.querySelector('.add');
    const titleInput: HTMLInputElement = document.querySelector('.title');
    const authorInput: HTMLInputElement = document.querySelector('.author');
    const contentInput: HTMLInputElement = document.querySelector('.content');

    addBlogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addDoc(colRef, {
        title: titleInput.value,
        author: authorInput.value,
        content: contentInput.value,
      }).then(() => {
        addBlogForm.reset();
      });
    });
  }, []);

  return (
    <Layout pageTitle='Add Blog'>
      <form className='form add'>
        <label>Title</label>
        <input type='text' className='title' />
        <label>Author</label>
        <input type='text' className='author' />
        <label>Content</label>
        <textarea className='content' />
        <button type='submit' className='btn'>
          Add Blog
        </button>
      </form>
    </Layout>
  );
};

export default AddBlog;

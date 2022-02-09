import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout';
import ProfileNav from '../../../components/nav-layout';
import { BlogData } from '../../blog/index';
import { db } from '../../../firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth } from '../../../firebase';
import { Link } from 'gatsby';

const BlogPosts = () => {
  const [data, setData] = useState<BlogData[]>([]);
  const user = auth.currentUser;
  const username = user && user.displayName;

  useEffect(() => {
    if (typeof username !== null) {
      const colRef = collection(db, 'blogs');
      const q = query(colRef, where('author', '==', username));

      onSnapshot(q, (snapshot) => {
        let blogs = [];
        snapshot.docs.forEach((doc) => {
          blogs.push({ ...doc.data(), id: doc.id });
        });
        setData(blogs);
      });
    }
  }, []);

  return (
    <Layout>
      <ProfileNav>
        <h2>Blog Posts</h2>
        {data.map((el) => {
          return (
            <article key={el.id}>
              <h4>{el.title}</h4>
              <p>{el.content.slice(0, 150) + '...'}</p>
              <Link to={'/profile/blogposts/' + el.id}>Edit</Link>
            </article>
          );
        })}
      </ProfileNav>
    </Layout>
  );
};

export default BlogPosts;

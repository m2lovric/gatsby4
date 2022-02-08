import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';
import './profile.scss';

const ProfilePage = () => {
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState('');
  const currentUser = auth.currentUser;

  const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log('profile updated');
        setDisplay(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Layout>
      <section className='profile'>
        <nav>
          <p>Admin</p>
          <p>Blog posts</p>
          <p>Users</p>
          <p>Review Content</p>
        </nav>
        <div>
          <h2>Profile</h2>
          <p>Name: {(currentUser && currentUser.displayName) || 'Name'}</p>
          {display && (
            <div>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type='submit'
                className='profile--edit-btn'
                onClick={() => handleUpdateProfile()}
              >
                Save
              </button>
            </div>
          )}
          <button
            className='profile--edit-btn'
            onClick={() => setDisplay(!display)}
          >
            Edit
          </button>
          <p>Email: {currentUser && currentUser.email}</p>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;

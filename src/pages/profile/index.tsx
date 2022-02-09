import * as React from 'react';
import { useState } from 'react';
import Layout from '../../components/layout';
import { auth } from '../../firebase';
import { updateProfile } from 'firebase/auth';
import './profile.scss';
import NavLayout from '../../components/nav-layout';

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
      <NavLayout>
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
      </NavLayout>
    </Layout>
  );
};

export default ProfilePage;

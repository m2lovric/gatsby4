import Layout from '../components/layout';
import React from 'react';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const currentUser = auth.currentUser;
  console.log(currentUser);
  return (
    <Layout>
      <div>
        <h2>Profile</h2>
        <p>Name: {currentUser.displayName || 'Name'}</p>
        <p>Email: {currentUser.email}</p>
      </div>
    </Layout>
  );
};

export default Profile;

import * as React from 'react';
import Layout from '../components/layout';
import { auth } from '../firebase';

const ProfilePage = () => {
  const currentUser = auth.currentUser;

  return (
    <Layout>
      <div>
        <h2>Profile</h2>
        <p>Name: {'Name' || (currentUser && currentUser.displayName)}</p>
        <p>Email: {currentUser && currentUser.email}</p>
      </div>
    </Layout>
  );
};

export default ProfilePage;

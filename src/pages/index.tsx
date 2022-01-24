import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from './components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle='Develop...'>
      <StaticImage
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        alt='keyboard'
      />
      <p>Matteo Lovric 2022</p>
    </Layout>
  );
};

export default IndexPage;

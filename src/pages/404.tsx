import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>Go Back</Link>
    </main>
  );
};

export default NotFoundPage;

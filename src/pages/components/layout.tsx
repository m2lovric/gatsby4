import * as React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

const Layout = ({ pageTitle, children }) => {
  return (
    <section className='container'>
      <title>{pageTitle}</title>
      <nav className='nav'>
        <Link to='/' className='nav--link'>
          Home
        </Link>
        <Link to='/blog' className='nav--link'>
          Blog
        </Link>
      </nav>
      <section>
        <h1 className='heading'>{pageTitle}</h1>
        {children}
      </section>
    </section>
  );
};

export default Layout;

import * as React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

interface IProps {
  pageTitle?: string;
  children: any;
}

const Layout = ({ pageTitle, children }: IProps) => {
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
        <Link to='/add' className='nav--link'>
          Add Blog
        </Link>
      </nav>
      <section>
        {pageTitle && <h1 className='heading'>{pageTitle}</h1>}
        {children}
      </section>
    </section>
  );
};

export default Layout;

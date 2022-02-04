import * as React from 'react';
import { Link } from 'gatsby';
import './layout.scss';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

interface IProps {
  pageTitle?: string;
  children: any;
}

const Layout = ({ pageTitle, children }: IProps) => {
  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(true);
    } else {
      setUser(false);
    }
  });

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
        {user && (
          <>
            <Link to='/add' className='nav--link'>
              Add Blog
            </Link>
            <Link to='/profile' className='nav--link'>
              Profile
            </Link>
          </>
        )}
      </nav>
      <section>
        {pageTitle && <h1 className='heading'>{pageTitle}</h1>}
        {children}
      </section>
    </section>
  );
};

export default Layout;

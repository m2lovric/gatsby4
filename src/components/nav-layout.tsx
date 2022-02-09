import * as React from 'react';
import { Link } from 'gatsby';
import '../pages/profile/profile.scss';

interface IProps {
  children: any;
}

const ProfileNav = ({ children }: IProps) => {
  return (
    <section className='profile'>
      <nav className='profile--sidenav'>
        <Link to='/profile'>Profile</Link>
        <Link to='/profile/blogposts'>Blog posts</Link>
      </nav>
      <section className='profile--main'>{children}</section>
    </section>
  );
};

export default ProfileNav;

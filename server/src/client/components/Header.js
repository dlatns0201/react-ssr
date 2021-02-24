import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href='/api/logout'>Logout</a>
  ) : (
    <a href='/api/auth/google'>Login</a>
  );

  return (
    <div>
      <Link to='/'>React SSR</Link>
      <div>
        <Link to='/uesrs'>Users</Link>
        <Link to='/admins'>Admins</Link>
        {authButton}
      </div>
    </div>
  )
};

export default Header;
import NavBar from 'components/navigation/navBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/navigation/userMenu';
import Navigation from 'components/navigation/navigation';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavBar />}
      <Outlet />
    </div>
  );
};

export default Layout;

import NavBar from 'components/navigation/navBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import UserMenu from 'components/navigation/userMenu';

const Layout = () => {
  return (
    <div>
      {/* <UserMenu /> */}
      <NavBar />
      <Outlet />
    </div>
  );
};
export default Layout;

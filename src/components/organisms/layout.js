import NavBar from 'components/navigation/navBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;

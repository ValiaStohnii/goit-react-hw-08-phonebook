import NavBar from 'components/navigation/navBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/navigation/userMenu';
import Navigation from 'components/navigation/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import theme from '../theme/theme';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" theme={theme}>
        <Toolbar theme={theme}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <NavBar />}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;

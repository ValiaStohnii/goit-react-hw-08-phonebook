import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import theme from '../theme/theme';

const styles = {
  link: {
    textDecoration: 'none',
    color: '#ffff',
  },
};

const NavBar = () => {
  return (
    <Stack spacing={2} direction="row" theme={theme}>
      <Button variant="outlined" theme={theme} color="secondary">
        <Link to="/register" style={styles.link}>
          Sing Up
        </Link>
      </Button>
      <Button variant="outlined" theme={theme} color="secondary">
        <Link to="/login" style={styles.link}>
          Log In
        </Link>
      </Button>
    </Stack>
  );
};
export default NavBar;

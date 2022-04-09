import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#ffff',
  },
};

const Navigation = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem color="#ff9e80" />}
      spacing={2}
    >
      <Button variant="text">
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>
      </Button>
      <Button variant="text">
        <NavLink to="/contacts" style={styles.link}>
          Phonebook
        </NavLink>
      </Button>
    </Stack>
  );
};

export default Navigation;

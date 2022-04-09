import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Container from '@mui/material/Container';
import theme from '../components/theme/theme';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container maxWidth="sm" theme={theme}>
      <Stack
        direction=" column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {isLoggedIn ? (
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            WELCOME
          </Typography>
        ) : (
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Log In or Sing Up{' '}
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default HomePage;

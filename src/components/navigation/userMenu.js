import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from '../theme/theme';
import Typography from '@mui/material/Typography';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <Stack spacing={2} direction="row" theme={theme}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Welcome {name}
      </Typography>
      <Button
        theme={theme}
        color="secondary"
        variant="outlined"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default UserMenu;

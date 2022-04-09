import React from 'react';
import Button from '@mui/material/Button';
import theme from '../theme/theme';

const FormButton = ({ type, text, onClick = null, isActive }) => {
  return (
    <Button theme={theme} variant="contained" onClick={onClick} type={type}>
      {text}
    </Button>
  );
};

export default FormButton;

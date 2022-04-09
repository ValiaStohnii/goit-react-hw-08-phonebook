import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ inputType, value, onChange, name, isValid, labelText }) => {
  return (
    <>
      <TextField
        id="outlined-name"
        label={name}
        type={inputType}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default Input;

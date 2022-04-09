import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice/filterSlice';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <TextField
      id="outlined-name"
      label="Filter"
      type="text"
      onChange={filterChange}
    ></TextField>
  );
};

export default Filter;

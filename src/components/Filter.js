import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label>
      Filter
      <input type="text" onChange={filterChange}></input>
    </label>
  );
};

export default Filter;

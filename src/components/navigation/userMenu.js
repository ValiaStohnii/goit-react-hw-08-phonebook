import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span>Welcome {name}</span>
      <button onClick={() => dispatch(authOperations.logOut())}>Log Out</button>
    </div>
  );
};

export default UserMenu;

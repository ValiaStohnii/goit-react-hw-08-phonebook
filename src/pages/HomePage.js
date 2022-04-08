import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>{isLoggedIn ? <h1>WELCOME</h1> : <h1>Log In or Sing Up </h1>}</div>
  );
};

export default HomePage;

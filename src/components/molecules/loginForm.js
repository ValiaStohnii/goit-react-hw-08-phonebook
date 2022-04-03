import React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Input from '../atoms/input';
import Button from 'components/atoms/button';
// import { logIn } from 'redux/slice/requesrs';

const LoginForm = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputType="email"
        value={email}
        name="email"
        onChange={handleInputChange}
        labelText={'Login'}
        isValid={true}
      />
      <Input
        inputType="password"
        value={password}
        name="password"
        onChange={handleInputChange}
        labelText={'Password'}
        isValid={true}
      />
      <Button type="submit" text="Log In" isActive={true} />
    </form>
  );
};

export default LoginForm;

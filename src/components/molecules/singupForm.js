import React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Input from '../atoms/input';
import Button from 'components/atoms/button';
// import { signUp } from 'redux/slice/requesrs';
import { useSignUpMutation } from 'redux/slice/usersApiSlice';

const SingupForm = () => {
  // const dispatch = useDispatch();
  const [singUpUser] = useSignUpMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    singUpUser({ name, email, password });
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputType="name"
        value={name}
        name="name"
        onChange={handleInputChange}
        labelText={'Name'}
        isValid={true}
      />
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
      <Button type="submit" text="Sign Up" isActive={true} />
    </form>
  );
};

export default SingupForm;

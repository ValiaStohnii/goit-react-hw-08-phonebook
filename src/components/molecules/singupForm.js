import React from 'react';
import Input from '../atoms/input';
import Button from 'components/atoms/button';

const SingupForm = () => {
  const handleInputChange = () => {};

  return (
    <form onSubmit={null}>
      <Input
        inputTupe="email"
        value={''}
        name="email"
        onChange={handleInputChange}
        labelText={'Login'}
        isValid={true}
      />
      <Input
        inputTupe="password"
        value={''}
        name="password"
        onChange={handleInputChange}
        labelText={'Password'}
        isValid={true}
      />
      <Input
        inputTupe="password"
        value={''}
        name="passwordConfirm"
        onChange={handleInputChange}
        labelText={'Password Confirm'}
        isValid={true}
      />
      <Button type="submit" text="Sign Up" isActive={true} />
    </form>
  );
};

export default SingupForm;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>

    <NavLink to="/contacts">Phonebook</NavLink>
  </nav>
);

export default Navigation;

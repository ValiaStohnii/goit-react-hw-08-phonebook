import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Sing Up</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      {/* <li>
        <Link to="/logout">Log Out</Link>
      </li> */}
    </ul>
  );
};
export default NavBar;

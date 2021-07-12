import { Link } from 'gatsby';
import React from 'react';

export const NavBar = () => {
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        margin: '0 auto',
        padding: '1.25rem 1.0875rem',
        justifyContent: 'space-evenly',
        backgroundColor: '#f4f4f4',
        fontFamily: 'karla',
        fontSize: '18px',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

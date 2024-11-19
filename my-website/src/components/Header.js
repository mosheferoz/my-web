import React from 'react';
import { Link } from 'react-router-dom'; // ייבוא של Link מ-React Router
import './styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>עוזר למידה חכם</h1>
      <p></p>
      <Link to="/login">
        <button className="cta-button">נסה עכשיו</button>
      </Link>
    </header>
  );
};

export default Header;

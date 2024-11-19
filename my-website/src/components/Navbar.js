import React from 'react';
import { useNavigate } from 'react-router-dom'; // ייבוא של useNavigate
import './styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // הגדרת הניווט

  const handleLoginClick = () => {
    navigate('/login'); // ניווט למסך הלוגין
  };

  return (
    <nav className="navbar">
      <div className="logo">QSTUDENT</div>
      <ul className="nav-links">
        <li><a href="/">בית</a></li>
        <li>
          <button onClick={handleLoginClick}>הרשמה</button> {/* כפתור שמנווט */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

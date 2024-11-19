import React, { useState } from 'react';
import './styles/login.css'; // וודא שיצרת קובץ CSS מתאים

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף את הלוגיקה של שליחת המידע לשרת
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">!הרשמה מוקדם לקהילה וקבלת שבועיים פרימיום בחינם</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-input"
          placeholder="הכנס את הדואל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="הכנס את ההטלפון שלך"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">התחבר</button>
      </form>
      <div className="login-footer">
      </div>
    </div>
  );
};

export default Login;

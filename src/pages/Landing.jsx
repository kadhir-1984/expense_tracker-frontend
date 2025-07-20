import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="box">
        <h1>💸 Expense Tracker</h1>
        <p>Track your expenses, stay on budget, and take control of your money!</p>
        <div className="btns">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

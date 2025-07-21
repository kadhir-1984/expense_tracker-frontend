import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1 className="landing-title">💸 Expense Tracker</h1>
        <p className="landing-desc">
          Track your expenses, stay on budget, and take control of your money!
        </p>
        <div className="landing-buttons">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

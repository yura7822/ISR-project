import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <Link to="/" className="brand-logo">ISR</Link> {/* ISR - Internationale Student Raad */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/auth/login">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

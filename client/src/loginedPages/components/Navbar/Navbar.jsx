import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar({user}) {
  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <a href="/" className="brand-logo">ISR</a>
        <ul className="right hide-on-med-and-down">
          <li>
              <Link><h6 className='welkomText'>Welkom {user.userFirstName}</h6></Link>
          </li>
          <li>
              <Link to='/user' className='userPicture'></Link>
          </li>
          <li>
            <Link to="/settings" className="settings"></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

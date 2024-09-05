// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="NAS logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Play" className="nav-link" activeClassName="active">
            Play
          </NavLink>
        </li>
        <li>
          <NavLink to="/Learn" className="nav-link" activeClassName="active">
            Learn
          </NavLink>
        </li>
        <li>
          <NavLink to="/Practice" className="nav-link" activeClassName="active">
            Practice
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Sitemap" className="nav-link" activeClassName="active">
            Sitemap
          </NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <input type="text" placeholder="Search Trailhead" />
        <FontAwesomeIcon icon={faPhoneAlt} className="navbar-icon" />
        <FontAwesomeIcon icon={faUserCircle} className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
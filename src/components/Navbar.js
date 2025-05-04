import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png'; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Drone Logo" className="nav-logo" />
        <span className="nav-title">DRONE OPS DASHBOARD</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/system">System Monitor</Link>
        <Link to="/alerts">Alerts</Link>
      </div>
    </nav>
  );
};

export default Navbar;

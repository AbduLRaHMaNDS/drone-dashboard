import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
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

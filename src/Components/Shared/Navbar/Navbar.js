import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className=''>
            <nav class="navbar navbar-expand-lg navbar-light nav-custom-style">
  <div class="container-fluid">
    <Link to="/" className=' brand-title'>Bikers Headquarter</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link link" : "unactive-link")}>Home</NavLink>
        <NavLink to="/allinventory" className={({ isActive }) => (isActive ? "active-link link" : "unactive-link")}>Inventory</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "unactive-link")}>Login</NavLink>
      </div>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
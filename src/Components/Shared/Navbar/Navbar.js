import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';
import './Navbar.css'

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light nav-custom-style">
  <div className="container-fluid">
    <Link to="/" className=' brand-title'>Bikers Headquarter</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link link" : "unactive-link")}>Home</NavLink>
        <NavLink to="/allinventory" className={({ isActive }) => (isActive ? "active-link link" : "unactive-link")}>Inventory</NavLink>
        <NavLink to="/my-items" className={({ isActive }) => (isActive ? "active-link" : "unactive-link")}>My Items</NavLink>
        {
          user? 
          <NavLink to="/login" onClick={handleSignOut} className={({ isActive }) => (isActive ? "active-link" : "unactive-link")}>SignOut</NavLink>
          :
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "unactive-link")}>Login</NavLink>
        }
        
      </div>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
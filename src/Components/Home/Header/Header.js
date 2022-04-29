import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;
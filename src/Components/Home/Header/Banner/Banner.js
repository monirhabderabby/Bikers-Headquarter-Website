import React from 'react';
import './Banner.css'
import banner from '../../../Assets/banner.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='d-lg-flex align-items-center banner container justify-content-lg-around'>
            <div className='cs-banner-content mb-2'>
                <h1 className='cs-banner-title'>Number One Bike Dealer in Bangladesh</h1>
                <p><small className='cs-banner-details'>We are the first Sports Bike dealer in Bangladesh. We have a large Warhouse of Bike. You can check our Inventory any time.</small></p>
                <br />
                <Link to="/allinventory" className='inventory-btn mt-2'>Go to Inventory</Link>
            </div>
            <div className='mt-4 banner-img'>
                <img className='img-fluid d-none d-lg-flex' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
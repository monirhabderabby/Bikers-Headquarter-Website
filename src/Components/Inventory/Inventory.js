import React from 'react';
import './Inventory.css'
import Navbar from '../Shared/Navbar/Navbar';
import v3 from '../Assets/all-bikes-photo/r15 v4.png'
import repsol from '../Assets/all-bikes-photo/repsol.png'
import gsxr from '../Assets/all-bikes-photo/gsxr.png'
import gixerSf from '../Assets/all-bikes-photo/gixxer_sf.png'

const Inventory = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='container mx-auto'>
            <div className="row">
                <h1 className='mb-3'>Top Rated Bikes stock update in warehouse</h1>
                <div className="col-lg-3">
                    <div className='product-stock-card'>
                        <img className='img-fluid' src={v3} alt="img" />
                        <p><span>Stock: </span>120</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='product-stock-card'>
                        <img className='img-fluid' src={repsol} alt="img" />
                        <p><span>Stock: </span>120</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='product-stock-card'>
                        <img className='img-fluid' src={gsxr} alt="img" />
                        <p><span>Stock: </span>120</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='product-stock-card'>
                        <img className='img-fluid' src={gixerSf} alt="" />
                        <p><span>Stock: </span>120</p>
                    </div>
                </div>
            </div>
            </section>

            <section>
                
            </section>
        </div>
    );
};

export default Inventory;
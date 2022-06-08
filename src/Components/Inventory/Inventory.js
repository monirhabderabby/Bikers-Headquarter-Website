import React, { useEffect, useState } from 'react';
import './Inventory.css'
import Navbar from '../Shared/Navbar/Navbar';
import v3 from '../Assets/all-bikes-photo/r15 v4.png'
import repsol from '../Assets/all-bikes-photo/repsol.png'
import gsxr from '../Assets/all-bikes-photo/gsxr.png'
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Shared/Footer/Footer';

const Inventory = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://hidden-thicket-51084.herokuapp.com/allProducts')
        .then(res=> res.json())
        .then(data => setAllProducts(data))
    }, [])
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
                        <img className='img-fluid' src='https://purepng.com/public/uploads/large/purepng.com-ktm-rc-390motorcyclemotorbikebikevehiclehondaktm-981525161914plvyv.png' alt="img" />
                        <p><span>Stock: </span>120</p>
                    </div>
                </div>
            </div>
            </section>

            <section className='mt-5 container mb-5'>
                <h1 className='headers mb-5'>All Products</h1>

                <div className='mt-5'>
                    <div className="row g-lg-5 g-md-4 g-2">
                        {
                            allProducts.map(p=> <ProductCard key={p._id} product={p}></ProductCard>)
                        }
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;
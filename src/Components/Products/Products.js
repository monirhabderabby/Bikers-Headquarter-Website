import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css'

const Products = () => {
    const navigate = useNavigate()
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-plains-88163.herokuapp.com/allProducts')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])

    
    return (
        <div className='container'>
            <h1 className='mt-5 mb-lg-2'>Top 6 Products</h1>
            <div className='mb-5'>
                <div className="row mt-3 g-5">
                    {
                        Products.slice(0,6).map(p=> <ProductCard key={p._id} product={p}></ProductCard>)
                    }
                </div>
                <button className='btn btn-outline-secondary mt-lg-5 mt-mb-3' onClick={()=>navigate('/allinventory')}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Products;
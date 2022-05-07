import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './StockUpdate.css'
import { faProductHunt} from '@fortawesome/free-brands-svg-icons'
import { faWarehouse, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const StockUpdate = () => {
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1200);
    useEffect(() => {
        fetch('https://morning-plains-88163.herokuapp.com/allProducts')
        .then(res=> res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);

    return (
        <div className='stock'>
            <h1>Stock Update</h1>
            <div className="row pb-5 pt-5">
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faProductHunt} />
                <h3>${products.length}+</h3>
                </div>
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faWarehouse} />
                <h3>${quantity}+</h3>
                </div>
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faCircleDollarToSlot} />
                <h3>120,00</h3>
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;
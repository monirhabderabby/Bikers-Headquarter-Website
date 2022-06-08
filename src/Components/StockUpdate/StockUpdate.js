import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './StockUpdate.css'
import { faProductHunt} from '@fortawesome/free-brands-svg-icons'
import { faWarehouse, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

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

    const {data, isLoading} = useQuery("status", ()=> fetch("http://localhost:5000/totalProduct").then(res=> res.json()))
    if(isLoading){
        return <Loading />
    }
    if(data){
        console.log(data[0].totalSales);
    }

    return (
        <div className='stock'>
            <h1>Stock Update</h1>
            <div className="row pb-5 pt-5">
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faProductHunt} />
                <h3>${data?.[0].totalProducts}+</h3>
                </div>
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faWarehouse} />
                <h3>${data?.[0].totalSales}+</h3>
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
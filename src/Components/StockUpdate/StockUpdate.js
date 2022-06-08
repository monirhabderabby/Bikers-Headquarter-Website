import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './StockUpdate.css'
import { faProductHunt} from '@fortawesome/free-brands-svg-icons'
import { faWarehouse, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const StockUpdate = () => {

    const {data, isLoading} = useQuery("status", ()=> fetch("https://hidden-thicket-51084.herokuapp.com/totalProduct").then(res=> res.json()))
    if(isLoading){
        return <Loading />
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
                <h3>35+</h3>
                </div>
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faCircleDollarToSlot} />
                <h3>${data?.[0].totalSales}+</h3>
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;
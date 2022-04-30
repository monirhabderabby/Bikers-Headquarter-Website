import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './StockUpdate.css'
import { faProductHunt} from '@fortawesome/free-brands-svg-icons'
import { faWarehouse, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const StockUpdate = () => {
    return (
        <div className='stock'>
            <h1>Stock Update</h1>
            <div className="row pb-5 pt-5">
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faProductHunt} />
                <h3>110+</h3>
                </div>
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faWarehouse} />
                <h3>2200+</h3>
                </div>
                <div className="col-lg-4 stock-card">
                <FontAwesomeIcon className='stock-icon' icon={faCircleDollarToSlot} />
                <h3>120,00,000</h3>
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;
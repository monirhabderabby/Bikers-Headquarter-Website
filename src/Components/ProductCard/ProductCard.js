import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const {productName, imgLink, productPrice, productDescription, supplier, quantity, _id} = product;
    return (
        <div className='col-lg-4'>
            <div class="content">
                    <img src={imgLink} alt="imgage" class="card-img"/>
                    <div className='content-body'>
                        <h2 class="card-title">{productName}</h2>
                        <p><small>Supplier: <span>{supplier}</span></small></p>
                        <p>{productDescription.slice(0,70)+'...'}</p>
                        <h3>${productPrice / 80}</h3>
                        <p>Stock: <span>{parseInt(quantity)}</span></p>
                    </div>
                    <button class="update-btn" onClick={()=> navigate(`/productDetails/${_id}`)}>Update</button>
                </div>
        </div>
    );
};

export default ProductCard;
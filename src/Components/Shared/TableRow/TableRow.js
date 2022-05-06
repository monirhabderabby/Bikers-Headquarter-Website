import React from 'react';
import './TableRow.css'

const TableRow = ({product}) => {
    const {productName, imgLink, productPrice, productDescription, supplier, quantity, _id} = product;
    return (
        <tr>
           <td><img src={imgLink} className="img-fluid custom-Img" alt="" /></td>
           <td>{productName}</td>
           <td>{quantity}</td>
           <td> ${productPrice / 80}</td>
           <td><button>Delete</button></td>
        </tr>
    );
};

export default TableRow;
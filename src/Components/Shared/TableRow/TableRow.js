import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TableRow.css'

const TableRow = ({product}) => {
    const {productName, imgLink, productPrice, productDescription, supplier, quantity, _id} = product;
    const navigate = useNavigate();


    const handleDelete =  id =>{
        const url =`http://localhost:8080/product/${id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        window.location.reload();
    }
    return (
        <tr>
           <td><img src={imgLink} className="img-fluid custom-Img" alt="" /></td>
           <td>{productName}</td>
           <td>{quantity}</td>
           <td> ${productPrice / 80}</td>
           <td><button className='btn btn-danger' onClick={() =>handleDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default TableRow;
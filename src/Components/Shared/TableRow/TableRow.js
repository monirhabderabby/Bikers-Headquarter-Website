import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TableRow.css'

const TableRow = ({product}) => {
    const {productName, imgLink, productPrice, quantity, _id} = product;
    const navigate = useNavigate();


    const handleDelete =  id =>{
        const proceed = window.confirm("Are you sure want to delete this Favourite Product?");
        if(proceed){
            const url =`https://morning-plains-88163.herokuapp.com/product/${id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            navigate('/')
        })
        }
        return;
        
        
        
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
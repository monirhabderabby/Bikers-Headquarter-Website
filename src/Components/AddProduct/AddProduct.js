import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] =  useState(0);
    const [imgLink, setImgLink] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [supplier, setSupplier] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const handleProductName = e =>{
        setProductName(e.target.value)
    }
    const handleProductPrice = e =>{
        setProductPrice(e.target.value)
    }
    const handleImgLink = e =>{
        setImgLink(e.target.value)
    }
    const handleQuantity = e =>{
        setQuantity(e.target.value)
    }
    const handleSupplier = e =>{
        const inputData = e.target.value;
        setSupplier(inputData.toLowerCase())
    }
    const handleDescription = e =>{
        setProductDescription(e.target.value);
    }
    const addProduct = async e =>{
        e.preventDefault();
        const email = user.email;
        const product = ({email, productName, productPrice, imgLink, quantity, supplier, productDescription});
        fetch('https://hidden-thicket-51084.herokuapp.com/addProduct', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged === true){
                e.target.reset();
                toast("Product Added")
                
            }
        })}
    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-100 d-flex justify-content-center mt-4 mb-5'>
                <form className='product-form' onSubmit={addProduct}>
                    <h2>Listing a new product!</h2>
                <div className='input-field'>
                        <input  type="email" name="email" value={user.email} readOnly required/>
                </div>
                <div className='input-field'>
                    <input  type="text" name="ProductName" onBlur={handleProductName} placeholder='Product name' required/>
                </div>
                <div className='input-field'>
                    <input  type="text" name="price" onBlur={handleProductPrice} placeholder='Product price' required/>
                </div>
                <div className='input-field'>
                    <input  type="text" name="image" onBlur={handleImgLink}  placeholder='Product image link' required/>
                </div>
                <div className='input-field'>
                    <input type="number" name="quantity" onBlur={handleQuantity} placeholder='Quantity' required/>
                </div>
                <div className='input-field'>
                <input  type="text" name="email" onBlur={handleSupplier} placeholder="supplier type only Yamaha/Suzuki/Ktm/Honda" required/>
                </div>
                <div className='input-field'>
                    <textarea name="description" onBlur={handleDescription} cols="30" rows="3" placeholder='Short description'></textarea>
                </div>
                <div className='input-field'>
                    <input type="submit" value="Add Product" />
                </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;
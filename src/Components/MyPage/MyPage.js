import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Navbar from '../Shared/Navbar/Navbar';
import './MyPage.css'

const MyPage = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-100 d-flex justify-content-center mt-4'>
                <form className='product-form'>
                    <h2>Listing a new product!</h2>
                <div className='input-field'>
                        <input  type="email" name="email" value={user.email} readOnly required/>
                </div>
                <div className='input-field'>
                    <input  type="text" name="Product-name" placeholder='Product name' required/>
                </div>
                <div className='input-field'>
                    <input  type="text" name="price" placeholder='Product price' required/>
                </div>
                <div className='input-field'>
                    <input  type="text" name="image" placeholder='Product image link' required/>
                </div>
                <div className='input-field'>
                    <input type="number" name="quantity" placeholder='Quantity' required/>
                </div>
                <div className='input-field'>
                    <input type="text" name="supplier" placeholder='Supplier name' required/>
                </div>
                <div className='input-field'>
                    <textarea name="description" cols="30" rows="3" placeholder='Short description'></textarea>
                </div>
                <div className='input-field'>
                    <input type="submit" value="Add Product" />
                </div>
                </form>
            </div>
        </div>
    );
};

export default MyPage;
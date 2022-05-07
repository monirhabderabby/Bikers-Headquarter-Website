import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Navbar from '../Shared/Navbar/Navbar';
import TableRow from '../Shared/TableRow/TableRow';
import './MyPage.css'

const MyPage = () => {
    const [user] = useAuthState(auth);

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] =  useState(0);
    const [imgLink, setImgLink] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [supplier, setSupplier] = useState("");
    const [productDescription, setProductDescription] = useState("");
    //ALl Product
    const [allProducts, setAllProducts] =  useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://morning-plains-88163.herokuapp.com/allproductsByEmail/${email}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllProducts(data))
    }, [user])



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
        fetch('https://morning-plains-88163.herokuapp.com/addProduct', {
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
        })

        const handleDelete = id =>{
            const url =`https://morning-plains-88163.herokuapp.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    
                }
            })
        }

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-100 d-flex justify-content-center mt-4'>
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

            <section className='container mt-5'>
                <h1 className='headers mb-lg-5'>My Products Lists</h1>

                <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Img</th>
                        <th scope="col">Name</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map(p=> <TableRow key={p._id} product={p} ></TableRow>)
                        }
                    </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default MyPage;
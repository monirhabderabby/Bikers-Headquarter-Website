
import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Navbar from '../Shared/Navbar/Navbar';
import TableRow from '../Shared/TableRow/TableRow';
import './MyPage.css'

const MyPage = () => {
    const [user] = useAuthState(auth);
    //ALl Product
    const [allProducts, setAllProducts] =  useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://hidden-thicket-51084.herokuapp.com/allproductsByEmail/${email}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllProducts(data))
    }, [user])
    return (
        <div>
            <Navbar></Navbar>
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoPage from '../../Assets/404page.jpg'

const NoPageFound = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <img className='img-fluid w-50' src={NoPage} alt="" /> <br />
            <small>You are on the wrong way of Biker's Headquarter.</small> <br />
            <button className='btn btn-primary mt-2' onClick={()=>navigate('/')}>Go Home</button>
        </div>
    );
};

export default NoPageFound;
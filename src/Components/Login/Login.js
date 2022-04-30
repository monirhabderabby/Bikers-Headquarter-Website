import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../Assets/logo/google.svg'
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <form className='form'>
                    <h1>Login</h1>
                    <div className='input-field'>
                        <input type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input type="password" name="password" placeholder='Password' required/>
                    </div>
                    <div className='input-field'>
                        <input  type="password" name="ConfirmPassword" placeholder='Confirm Password' required/>
                        <small className='text-danger'></small>
                    </div>
                    <small className='reset-btn'>Reset Password</small> <br />
                    <input type="submit" value="LOGIN" className='login-btn'/>
                    <p>I am new? <Link to="/signup" className='signup-btn'>Create an Account</Link></p>

                    <p className='or'>------ or ------</p>
                    
                    <div className='input-field'>
                        <button className='google-btn'>
                            <img src={google} className="icon" alt='icon'></img>
                            Continue with Google</button>
                    </div>
                    
                </form>

                
            </div>
        </div>
    );
};

export default Login;
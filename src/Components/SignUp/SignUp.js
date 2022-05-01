import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import google from '../Assets/logo/google.svg'
import Navbar from '../Shared/Navbar/Navbar';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        a,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const createUser = () =>{
        createUserWithEmailAndPassword(email, password);
        toast("Account created")
    }

    const handleForm = e =>{
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <form className='form' onSubmit={handleForm}>
                    <h1>SignUp</h1>
                    <div className='input-field'>
                        <input type="email" name="email" onBlur={handleEmail} placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input type="password" name="password" onBlur={handlePassword} placeholder='Password' required/>
                    </div>
                    <input type="submit" value="SIGNUP" className='login-btn' onClick={createUser} />
                    <p>Already have an account? <Link to="/login" className='signup-btn'>Login</Link></p>
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

export default SignUp;
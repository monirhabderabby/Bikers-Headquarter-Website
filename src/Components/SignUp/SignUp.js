import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUp.css'
import google from '../Assets/logo/google.svg'
import Navbar from '../Shared/Navbar/Navbar';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        a,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(loading){
          return <Loading></Loading>
      }

    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const createUser = () =>{
        createUserWithEmailAndPassword(email, password);
        toast.success("Account created");
        navigate('/')
    }

    const handleForm = e =>{
        e.preventDefault();
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
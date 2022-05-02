import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../Shared/Navbar/Navbar';
import google from '../Assets/logo/google.svg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomError] = useState("");

    //Naviate
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(loading){
          return <Loading></Loading>
      }

    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleForm = e =>{
        e.preventDefault();
    }
    const userLogin = () =>{
        createUserWithEmailAndPassword(email, password);
        toast.success("account created");
        navigate('/');
    }

    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <div className="form">
                <form onSubmit={handleForm}>
                    <h1>SignUp</h1>
                    <div className='input-field'>
                        <input onBlur={handleEmail} type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input onBlur={handlePassword} type="password" name="password" placeholder='Password' required/>
                    </div>
                    <small className='reset-btn' >Reset Password</small> <br />
                    <input onClick={userLogin} type="submit" value="LOGIN" className='login-btn'/>
                    <p>Already have an account? <Link to="/login" className='signup-btn'>Login</Link></p>

                    <p className='or'>------ or ------</p>
                    
                    
                    
                </form>
                <div className='input-field'>
                        <button className='google-btn' >
                            <img src={google} className="icon" alt='icon'></img>
                            Continue with Google</button>
                    </div>
                    <ToastContainer />
                </div>

                
            </div>
        </div>
    );
};

export default SignUp;
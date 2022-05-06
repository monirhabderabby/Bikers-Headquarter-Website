import React, { useState } from 'react';
import google from '../Assets/logo/google.svg'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/firebase.init'
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [customError, setCustomError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    
    const [signInWithEmailAndPass, user2 , loading1, error ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [user, loading] = useAuthState(auth)

    if(loading1 || loading){
        return <Loading></Loading>
    }
    
    let from = location.state?.from?.pathname || "/";

    if(user2 || user1){
        navigate(from)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e =>{
        setConfirmPassword(e.target.value)
    }
    const handleForm = e =>{
        e.preventDefault()
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle();
    }
    
    const userLogin = () =>{
        if(password !== confirmPassword){
            setCustomError("Password didn't matched")
        }
        else{
            setCustomError('')
            signInWithEmailAndPass(email, password);
        }

    }

    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast('email sent')
          })
          .catch((error) => {
              const errormessage = error.message;
              const emailError = errormessage.includes("auth/missing-email");
              if(emailError){
                setCustomError("Please type your email in field!")
              }
          });
    }
    
    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <div className="form">
                <form onSubmit={handleForm}>
                    <h1>Login</h1>
                    <div className='input-field'>
                        <input onBlur={handleEmail} type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input onBlur={handlePassword} type="password" name="password" placeholder='Password' required/>
                    </div>
                    <div className='input-field'>
                        <input onBlur={handleConfirmPassword} type="password" name="ConfirmPassword" placeholder='ConfirmPassword' required/>
                        <small className='text-danger'>{customError}</small>
                    </div>
                    <small className='reset-btn' onClick={handleResetPassword}>Reset Password</small> <br />
                    <input onClick={userLogin} type="submit" value="LOGIN" className='login-btn'/>
                    <p>I am new? <Link to="/signup" className='signup-btn'>Create an Account</Link></p>

                    <p className='or'>------ or ------</p>
                    
                    
                    
                </form>
                <div className='input-field'>
                        <button className='google-btn' onClick={handleSignInWithGoogle}>
                            <img src={google} className="icon" alt='icon'></img>
                            Continue with Google</button>
                    </div>
                    <ToastContainer />
                </div>

                
            </div>
        </div>
    );
};

export default Login;
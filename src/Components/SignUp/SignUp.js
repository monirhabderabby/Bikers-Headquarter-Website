import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../Shared/Navbar/Navbar';
import google from '../Assets/logo/google.svg'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    //Naviate
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, user1, loading1] = useSignInWithGoogle(auth);
    const [user, loading] = useAuthState(auth)

      if(loading || loading1){
          return <Loading></Loading>
      }
      let from = location.state?.from?.pathname || "/";

      if(user || user1){
          navigate(from)
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
    }
    const handleGoogleSignup = () => {
        signInWithGoogle();
        toast.success("successfully login with Google!")
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
                    <input onClick={userLogin} type="submit" value="SIGNUP" className='login-btn'/>
                    <p>Already have an account? <Link to="/login" className='signup-btn'>Login</Link></p>

                    <p className='or'>------ or ------</p>
                    
                    
                    
                </form>
                <div className='input-field' onClick={handleGoogleSignup}>
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
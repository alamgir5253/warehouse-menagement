import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

import './Login.css'
const Login = () => {
  const navigate = useNavigate();
  const  location = useLocation();
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  })
  const [userError, setUserError] = useState({
    email: '',
    password: ''
  })

  // firebase login start 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // google login start 
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  useEffect(()=>{
    if(GoogleError){
      toast(GoogleError.message)
    }
  },[GoogleError])

  // redirect start 
  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if(user ||GoogleUser) {
      navigate(from, { replace: true });
    }
  },[user, GoogleUser])

  // loading start

  if(loading){
    return <p>loading...</p>
  }
  const handleEmail = e => {
    const emailRegex = /\S+@\S+\.\S+/
    const validEmail = emailRegex.test(e.target.value)
    console.log(validEmail);
    if (validEmail) {
      setUserinfo({ ...userinfo, email: e.target.value })
      setUserError({ ...userError, email: '' })
    } else {
      setUserError({ ...userError, email: 'enter valid email' })
      setUserinfo({ ...userinfo, email: '' })
    }
  }

  const handlePassword = e => {
    const passwordRegex = /.{8,}/
    const validPassword = passwordRegex.test(e.target.value)
    if (validPassword) {
      setUserinfo({ ...userinfo, password: e.target.value })
      setUserError({ ...userError, password: '' })
    } else {
      setUserError({ ...userError, password: 'minimum 8 character' })
      setUserinfo({ ...userinfo, password: '' })
    }
  }

  const handleLogin = e => {
    e.preventDefault()
    signInWithEmailAndPassword(userinfo.email, userinfo.password);
  }

  return (
    <section>
      <div className='form-container'>
        <form onSubmit={handleLogin} >
          <h2 className='form-title'>login</h2>
          <div className="input-container">
          <input type="email" name="email" id="" placeholder='enter email' onChange={handleEmail} />
          <p className='error'>{userError && userError.email}</p>

          <input type="password" name="password" id="" placeholder='enter password' onChange={handlePassword}/>
          <p className='error'>{userError && userError.password}</p>
          </div>
          <p>forget password?</p>
          <button type='submit'>Login</button>
          <div className="social-signup">
            <h5>Or Signup Using </h5>
            <FaGoogle onClick={()=>signInWithGoogle()} className='social' />
          </div>
          <ToastContainer />
        </form>

      </div>
    </section>
  );
};

export default Login;
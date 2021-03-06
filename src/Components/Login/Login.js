import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from "react-icons/fa";
import {useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

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

  // reset password start 
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleResetEmail =async()=>{
    await sendPasswordResetEmail(userinfo.email)
    toast('reset your password')
  }

  // useSignInWithEmailAndPassword start 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  useEffect(()=>{
    if(error){
      <p className='error'>{toast(error.message)}</p>
    }
  },[error])

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

  if(loading ||sending){
    return <Loading />
  }

  // handleEmail start 

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
  // handlePassword start 

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
  // handleLogin start 

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
          <p onClick={handleResetEmail} >forget password?</p>
          <button type='submit'>Login</button>
          <div className="social-signup">
            <h5>Or Signup Using </h5>
            <FaGoogle onClick={()=>signInWithGoogle()} className='social' />
          </div>
          
        </form>

      </div>
    </section>
  );
};

export default Login;
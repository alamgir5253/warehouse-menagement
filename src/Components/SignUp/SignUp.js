import React, { useEffect, useState } from 'react';
import {FaGoogle } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'
import { useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const  location = useLocation();
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
    confirmPassword:''
  })

  const [userError, setUserError] = useState({
    email: '',
    password: '',
    confirmPassword:''
  })
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
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
    navigate(from);
  }
},[user, GoogleUser])
  if(loading){
    return <p>loading...</p>
  }

  const handleEmail = e => {
    const emailRegex = /\S+@\S+\.\S+/
    const validEmail = emailRegex.test(e.target.value)
    console.log(validEmail);
    if (validEmail) {
      setUserinfo({ ...userinfo, email:e.target.value })
      setUserError({ ...userError, email: '' })
    } else {
      setUserError({ ...userError, email: 'enter valid email' })
      setUserinfo({ ...userinfo, email: '' })
    }
  }
  const handlePassword = e => {
    const passwordRegex = /.{8,}/
    const validPassword = passwordRegex.test(e.target.value)
    console.log(validPassword);
    if (validPassword) {
      setUserinfo({ ...userinfo, password: e.target.value })
      setUserError({ ...userError, password: '' })
    } else {
      setUserError({ ...userError, password: 'minimum 8 character' })
      setUserinfo({ ...userinfo, password: '' })
    }
  }

  const handleConfirmPassword = e =>{
    const userConfirmPassword = e.target.value
    if(userinfo.password === userConfirmPassword){
      setUserinfo({...userinfo, ConfirmPassword:userConfirmPassword})
      setUserError({...Error, confirmPassword:''})
    }else{
      setUserError({...Error, confirmPassword:"password don't match"})
      setUserinfo({...userinfo, confirmPassword:''})
    }
  }

  const handleSignUp = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(userinfo.email, userinfo.password);
  }
  return (
    <section>
      
      <div className='form-container'>
      <form  onSubmit={handleSignUp}>
      <h2 className='form-title'>signup</h2>
        <div className="input-container">
          <input type="email" name="email" id="" placeholder='enter email' onChange={handleEmail} />
          <p className='error'>{userError && userError.email}</p>

          <input type="password" name="password" id="" placeholder='enter password' onChange={handlePassword}/>
          <p className='error'>{userError && userError.password}</p>
          <input type="password" name="" id="password"  placeholder='confirm password' onChange={handleConfirmPassword}/>
          <p className='error'>{userError && userError.confirmPassword}</p>

        </div>
        <button type='submit'>Signup</button>
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

export default SignUp;
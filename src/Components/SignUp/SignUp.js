import React, { useEffect, useState } from 'react';
import {FaGoogle } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
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
  // useCreateUserWithEmailAndPassword start 

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
  
  const [signInWithGoogle,GoogleUser,GoogleError] = useSignInWithGoogle(auth);
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
    return <Loading />
  }
  // handleEmail start 

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

  // handlePassword start 

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
// handle confirmPassword start 
  const handleConfirmPassword = e =>{
    
    if(userinfo.password === e.target.value){
      setUserinfo({...userinfo, ConfirmPassword:e.target.value})
      setUserError({...Error, confirmPassword:''})
    }else{
      setUserError({...Error, confirmPassword:"password don't match"})
      setUserinfo({...userinfo, confirmPassword:''})
    }
  }
  // handleSignUp start 

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
      
      </form>
    </div>
    </section>
  );
};

export default SignUp;
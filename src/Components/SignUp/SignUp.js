import React, { useState } from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import './SignUp.css'
const SignUp = () => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
    confirmPassword:''
  })
  console.log(userinfo.confirmPassword)
  const [userError, setUserError] = useState({
    email: '',
    password: '',
    confirmPassword:''
  })
  // console.log(userinfo);
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
    console.log(userinfo.email, userinfo.password);
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
        <p>forget password?</p>
        <button type='submit'>Signup</button>
        <div className="social-signup">
        <h5>Or Signup Using </h5>
        <FaGoogle className='social' />
      </div>
      </form>
      
    </div>
    </section>
  );
};

export default SignUp;
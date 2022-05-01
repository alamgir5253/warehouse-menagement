import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";

import './Login.css'
const Login = () => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  })
  const [userError, setUserError] = useState({
    email: '',
    password: ''
  })
  console.log(userinfo);
  const handleEmail = e => {
    const emailRegex = /\S+@\S+\.\S+/
    const validEmail = emailRegex.test(e.target.value)
    console.log(validEmail);
    if (validEmail) {
      setUserinfo({ ...userinfo, email: validEmail })
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
      setUserinfo({ ...userinfo, password: validPassword })
      setUserError({ ...userError, password: '' })
    } else {
      setUserError({ ...userError, password: 'minimum 8 character' })
      setUserinfo({ ...userinfo, password: '' })
    }
  }

  const handleLogin = e => {
    e.preventDefault()
    console.log(userinfo.email, userinfo.password);
  }

  return (
    <section>
      <div className='form-container'>
        <form onSubmit={handleLogin} >
          <h2 className='form-title'>login</h2>
          <div className="input-container">
            <input type="text" name="" id="" placeholder='enter email' onChange={handleEmail} />
            <p className='error'>{userError && userError.email}</p>
            <input type="text" name="" id="" placeholder='enter password' onChange={handlePassword} />
            <p className='error'>{userError && userError.password}</p>
          </div>
          <p>forget password?</p>
          <button type='submit'>Login</button>
          <div className="social-signup">
            <h5>Or Signup Using </h5>
            <FaGoogle className='social' />
          </div>
        </form>

      </div>
    </section>
  );
};

export default Login;
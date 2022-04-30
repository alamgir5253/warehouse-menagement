import React from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";

import './Login.css'
const Login = () => {
  return (
    <section>
      
      <div className='form-container'>
      <form >
      <h2 className='form-title'>login</h2>
        <div className="input-container">
          <input type="text" name="" id="" placeholder='enter email' />
          <input type="text" name="" id="" placeholder='enter password'/>
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
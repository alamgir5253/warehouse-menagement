import React from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import './SignUp.css'
const SignUp = () => {
  return (
    <section>
      
      <div className='form-container'>
      <form >
      <h2 className='form-title'>signup</h2>
        <div className="input-container">
          <input type="text" name="" id="" placeholder='enter email' />
          <input type="text" name="" id="" placeholder='enter password'/>
          <input type="text" name="" id=""  placeholder='confirm password'/>
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
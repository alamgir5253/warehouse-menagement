import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='notfound-container'>
      <div>
        <img src={notfound} alt="" />
        <p>the page you looking for is not found</p>
        <Link className='GoToHome' to='/home'>home</Link>
      </div>
    </div>
  );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='notfound-container'>
      <div>
        <img src={notfound} alt="" />
        <p>the page are u looking for is not found</p>
        <Link to='/home'>home</Link>
      </div>
    </div>
  );
};

export default NotFound;
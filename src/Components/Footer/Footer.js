import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import payment from '../../images/payment.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='section1'>
        <h3>Dream Auto Warehouse
</h3>
        <div className="footer-social">
        <FaFacebook className='facebook'/><FaTwitter className='twitter' /><FaInstagram className='instagram' /> <FaYoutube className='youtube' />
          </div>
      </div>
      <div className='section2'>
        <h3>contact info</h3>
        <p>+1 (212)-695-1962</p>
        <p>Info@Coffeekup.Com</p>
        <p>463 7th Ave, NY 10018, USA</p>
      </div>
      <div className='section3'>
        <h3>payment method</h3>
        <img src={payment} alt="" />

      </div>
    </footer>
  );
};

export default Footer;
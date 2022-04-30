import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import team1 from '../../images/team/team1.jpg'
import team2 from '../../images/team/team2.jpg'
import team3 from '../../images/team/team3.jpg'
import team4 from '../../images/team/team4.jpg'
import './Team.css'
const Team = () => {
  return (
    <section>
      <h2 className='team-title'>meet our team</h2>
      <div className='team-section'>
        <div className='team'>
          <div className="team-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-info">
            <h3>May Brown</h3>
            <h4>Chief Financial Officer / CEO</h4>
          </div>
          <div className="team-social">
            <FaFacebook className='facebook'/><FaTwitter className='twitter' /><FaInstagram className='instagram' />
          </div>
          
        </div>
        <div className='team'>
          <div className="team-img">
            <img src={team2} alt="" />
          </div>
          <div className="team-info">
            <h3>May Brown</h3>
            <h4>Chief Financial Officer / CEO</h4>
          </div>
          <div className="team-social">
            <FaFacebook className='facebook'/><FaTwitter className='twitter' /><FaInstagram className='instagram' /> <FaYoutube className='youtube' />
          </div>
          
        </div>
        <div className='team'>
          <div className="team-img">
            <img src={team3} alt="" />
          </div>
          <div className="team-info">
            <h3>May Brown</h3>
            <h4>Chief Financial Officer / CEO</h4>
          </div>
          <div className="team-social">
            <FaFacebook className='facebook'/><FaTwitter className='twitter' /><FaInstagram className='instagram' />
          </div>
          
          
        </div>
        <div className='team'>
          <div className="team-img">
            <img src={team4} alt="" />
          </div>
          <div className="team-info">
            <h3>May Brown</h3>
            <h4>Chief Financial Officer / CEO</h4>
          </div>
          <div className="team-social">
            <FaFacebook className='facebook'/><FaTwitter className='twitter' /><FaInstagram className='instagram' />
          </div>
          
        </div>


        <div></div>
        <div></div>
        <div></div>
      </div>

    </section>
  );
};

export default Team;
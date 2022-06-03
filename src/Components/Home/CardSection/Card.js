import React from 'react';
import card1 from '../../../images/card/card1.jpg'
import card2 from '../../../images/card/card2.jpg'
import card3 from '../../../images/card/card3.jpg'
import card4 from '../../../images/card/card4.jpg'
import card5 from '../../../images/card/card5.jpg'
import card6 from '../../../images/card/card6.jpg'
import card7 from '../../../images/card/card7.jpg'
import card8 from '../../../images/card/card8.jpg'

import './Card.css'
const Card = () => {
  return (
    <section>
      <h2 className='card-title'>our our best collection</h2>
      <div className='card-container'>
      <div className="card">
        <div className='card-img1'>
          <img src={card1} alt="car" />
        </div>
        <div className='card-img2'>
          <img src={card2} alt="car" />
        </div>
        <div className='card-info'>
          <h3>Nam Viverra Euismod</h3>
          <span>Hardtop, SUV</span>
          <p>It’s a visual promise of thrilling performance. Bi-Xenon headlights with dynamic cornering lights provide optimum illumination of the road – and therefore a high level of safety. </p>
          </div>
      </div>
      <div className="card">
        <div className='card-img1'>
          <img src={card3} alt="car" />
        </div>
        <div className='card-img2'>
          <img src={card4} alt="car" />
        </div>
        <div className='card-info'>
          <h3>Tristique Senectus</h3>
          <span>Convertible, Coupe</span>
          <p>A legacy of victory. Since 1984, NISMO® has been the official in-house racing arm of Nissan. Started by a group of maverick Nissan engineers almost 30 years ago, NISMO® is synonymous with passion,</p>
          </div>
      </div>
      <div className="card">
        <div className='card-img1'>
          <img src={card5} alt="car" />
        </div>
        <div className='card-img2'>
          <img src={card6} alt="car" />
        </div>
        <div className='card-info'>
          <h3>Aenean Fermentum</h3>
          <span>Hardtop, Sedan, Sports Car</span>
          <p>The prowess of the new Cayenne is clearly reflected in the design: the front and rear sections have been completely revised. They are now sharper and even more sophisticated. </p>
        </div>
      </div>
      <div className="card">
        <div className='card-img1'>
          <img src={card7} alt="car" />
        </div>
        <div className='card-img2'>
          <img src={card8} alt="car" />
        </div>
        <div className='card-info'>
          <h3>Morbi Inta Nisiut</h3>
          <span>Hardtop, Sedan</span>
          <p>A roadster is not simply a car. Power is transmitted to the road by 18-inch Boxster wheels. High-quality, stylish materials are used in the interior.</p>
        </div>
      </div>
     
      </div>
    </section>
  );
};

export default Card;
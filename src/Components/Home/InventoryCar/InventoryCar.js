import React from 'react';
import './InventoryCar.css'
const InventoryCar = ({car}) => {
  console.log(car);
  const {_id, description, name, image, price, quentity} =car
  return (
    <div>
      <div>
      <div className="car">
        <div className='car-img'>
          <img src={image} alt="car" />
        </div>
        <div className='car-info'>
          <h3>{name}</h3>
          <span>${price}</span>
          <h5><span>quentity</span> {quentity}</h5>
          <p>{description}</p>
          </div>
          <button>inventory</button>
      </div>
      </div>
    </div>
  );
};

export default InventoryCar;
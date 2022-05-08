import React from 'react';
import './InventoryCar.css'
const InventoryCar = ({car}) => {
  console.log(car);
  const {_id, description, name, image, price, quentity, suplayer} =car
  return (
    <div>
      <div>
      <div className="car">
        <div className='car-img'>
          <img src={image} alt="car" />
        </div>
        <div className='car-info'>
          <h3>name: {name}</h3>
          <span>price: $ {price}</span>
          <h5>quentity: {quentity}</h5>
          <p>{description}</p>
          <h5> suplayer: {suplayer}</h5>
          </div>
          <button>Inventory</button>
      </div>
      </div>
    </div>
  );
};

export default InventoryCar;
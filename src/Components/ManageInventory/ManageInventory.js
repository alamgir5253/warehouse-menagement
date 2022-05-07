import React from 'react';
import './ManageInventory.css'
const ManageInventory = ({item}) => {
  const {_id, description, name, image, price, quentity} =item
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
          <button>delete item</button>
      </div>
      </div>
    </div>
  );
};

export default ManageInventory;
import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css'
const ManageInventories = () => {
const [items, setItems] = useState([])
console.log(items);
useEffect(()=>{
  const url = 'http://localhost:5000/ManageInventories'
  fetch(url)
  .then(res => res.json())
  .then(data =>setItems(data))
},[])

  return (
    <div>
    <h2 className='manageinventories-title'>ManageInventories</h2>
    <div className="ManageInventories-section">
      {
        items.map(item => <ManageInventory
        key={item._id}
        item={item}
        ></ManageInventory>)
      }
    </div>
      
    </div>
  );
};

export default ManageInventories;
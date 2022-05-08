import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInventories.css'
const ManageInventories = () => {
const [items, setItems] = useState([])
useEffect(()=>{
  const url = 'https://sheltered-brook-56592.herokuapp.com/ManageInventories'
  fetch(url)
  .then(res => res.json())
  .then(data =>setItems(data))
},[])

// handle delete item 
const handleDelete = id =>{
  const proceed = window.confirm('are you sure')
  if(proceed){
    const url =`https://sheltered-brook-56592.herokuapp.com/ManageInventories/${id}`
    fetch(url, {
      method:'DELETE'
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      const remaining = items.filter(deleteItem => deleteItem._id !== id)
      setItems(remaining)
    })

  }
}

  return (
    <div>
    <h2 className='manageinventories-title'>Manage Inventories</h2>
    <div className="ManageInventories-section">
      {
        items.map(item => <div key={item._id} className="car">
        <div className='car-img'>
          <img src={item.image} alt="car" />
        </div>
        <div className='car-info'>
          <h3>{item.name}</h3>
          <span>${item.price}</span>
          <h5><span>quentity</span> {item.quentity}</h5>
          <p>{item.description}</p>
          </div>
          <button onClick={()=> handleDelete(item._id)} className='manageinventory-button'>delete item</button>
      </div>)
      }
    </div>
    <Link className='addItemButton' to='/additem'>add item</Link>
      
    </div>
  );
};

export default ManageInventories;
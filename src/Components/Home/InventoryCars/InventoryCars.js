import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryCar from '../InventoryCar/InventoryCar';
import './InventoryCars.css'
const InventoryCars = () => {
  const [cars, setCars] = useState([])
  useEffect(()=>{
    const url ="http://localhost:5000/cars"
    fetch(url)
    .then(res => res.json())
    .then(data => setCars(data))
  },[])
  return (
    <div>
    <h2 className='inventory-items-title'>inventory items</h2>
    <div className="inventorySection">
      {
        cars.map(car => <InventoryCar
        key={car._id}
        car={car}
        ></InventoryCar>)
      }
    </div>
    <Link to='/ManageInventories'><h2 className='inventory-items-title'>Manage Inventories</h2></Link>
    </div>
  );
};

export default InventoryCars;
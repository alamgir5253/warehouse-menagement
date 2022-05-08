import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserItem = () => {
  const [user] = useAuthState(auth);
  const [UserItems, setUserItems] = useState([])
useEffect(()=>{
  const email = user.email
  const url = `https://sheltered-brook-56592.herokuapp.com/UserOrder?email=${email}`
  fetch(url)
  .then(res => res.json())
  .then(data =>setUserItems(data))
},[user])

const handleDelete = id =>{
  const proceed = window.confirm('are you sure')
  if(proceed){
    const url =`https://sheltered-brook-56592.herokuapp.com/UserOrder/${id}`
    fetch(url, {
      method:'DELETE'
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      const remaining = UserItems.filter(deleteItem => deleteItem._id !== id)
      setUserItems(remaining)
    })

  }
}
  return (
    <div>
      <div className="ManageInventories-section">
      {
        UserItems.map(item => <div key={item._id} className="car">
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
    </div>
  );
};

export default UserItem;
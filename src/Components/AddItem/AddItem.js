import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
     console.log(data)
     const url = 'http://localhost:5000/ManageInventories'
     fetch(url, {
       method:'POST',
       headers:{
         'content-type': 'application/json'
       },
       body:JSON.stringify(data)
     })
     .then(res => res.json())
     .then(result =>{
       console.log(result)
     })
     
    
    
    };


  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
      <input placeholder='enter name' type="text" {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='price' {...register("price")} />
      <input placeholder='suplayer' type="text" {...register("suplayer")} />
      <input placeholder='quentity' type="number" {...register("quentity")} />
      <input placeholder='description' type="text" {...register("description")} />
      <input placeholder='image url' type="text" {...register("image")} />
      </div>
      <button type='submit'>Add New Item</button>
    </form>
    </div>
  );
};

export default AddItem;
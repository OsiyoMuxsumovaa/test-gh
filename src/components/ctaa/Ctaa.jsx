import React from 'react'
import './ctaa.css'
import { useState } from 'react'
const Ctaa = () => {
  const [data, setData] = useState({name:"", email:"", phone:"", message:""});
  const handleChange = (e) =>{
   const name  = e.target.name;
   const value  = e.target.value;
   setData({...data, [name]:value})
  }
   const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (

    <div className='cta'>
      <form method='submit' onChange={handleSubmit}>
        <h1>Contact me</h1>
        <input type="text" name='name' id='' onChange={handleChange} value={data.name} placeholder='Enter Name' />
        <input type="email" name='email' id=''onChange={handleChange} value={data.email} placeholder='example@gmail.com' />
        <input type="phone" name='phone' id='' onChange={handleChange} value={data.phone} placeholder='Your phone number' />
        <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Type here' ></textarea>
        <button type='submit'>Send</button>
        <p>{data.name}, {data.email}, {data.phone}, {data.message}</p>
      </form>
    </div>
  )
}

export default Ctaa
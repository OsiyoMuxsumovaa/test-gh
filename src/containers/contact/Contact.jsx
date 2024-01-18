import React from 'react'
import { useState } from 'react'
import './contact.css'
import './contact.js'
const Contact = () => {
  const [data, setData] = useState({name:"", email:"", phone:"", message:""});
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  
  }
  return (
 <form method='post' onSubmit={handleSubmit}>
   <h1>Contact Me</h1>
   <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Enter name'/>
   <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder='example@gmail.com' />
   <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='Your phone'/>
   <textarea name="message" id="" onChange={handleChange} value={data.message} cols="30" rows="10" placeholder='Type here'></textarea>
   <button type='submit'>Send</button>
   {/* <p>{data.name}, {data.email}, {data.phone}, {data.message}</p> */}
 </form>
  )
}

export default Contact

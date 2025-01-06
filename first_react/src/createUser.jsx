import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name,setName]=useState("");
  const[email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  // const navigate=useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    axios.post('https://backenddemomern-0d1a.onrender.com/api/user/create',{
      name,
      email,
      address
    }).then((res)=>{
      console.log(res.data);
      // navigate('/');
    }).catch((err)=>{
      console.log(err);
    })

  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Create User</h1>
      <form onSubmit={submit}>
        <label htmlFor='name'>Name:</label>
        <input type="text"placeholder='Enter user name' name='name' id='name' onChange={(e)=>setName(e.target.value)}></input><br></br>
        <label htmlFor='email'>E-mail</label>
        <input type="text"placeholder='Enter email' name='email' id='email'onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <label htmlFor='address'>Address</label>
        <input type="text"placeholder='Enter address' name='address' id='address'onChange={(e)=>setAddress(e.target.value)}></input><br></br>
        <button style={{color:'white',backgroundColor:'violet',fontSize:20}}>Create </button>
      </form>
    </div>
  )
}

export default CreateUser

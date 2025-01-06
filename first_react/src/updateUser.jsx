import React from 'react'
import{useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const UpdateUser = () => {

  const {id}=useParams();
  // const [id,setId]=useState("");
  const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const [address,setAddress]=useState("");
  const submit=(e)=>{
    e.preventDefault();
    axios.put(`https://backenddemomern-0d1a.onrender.com/api/user/update/${id}`,{
      name,
      email,
      address
    }).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <div>
      <h1 style={{textAlign:'center'}}>Update User</h1>
      <form onSubmit={submit}>
        <label htmlFor='name'>Name:</label>
        <input type="text" value={name} name='name' id='name' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
        <label htmlFor='email'>E-mail:</label>
        <input type="text"value={email} name='email' id='email' onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
        <label htmlFor='address'>Address:</label>
        <input type="text"value={address} name='address' id='address'onChange={(e)=>setAddress(e.target.value)}></input><br></br><br></br>
        <button style={{color:'white',backgroundColor:'violet',fontSize:20}}>Update </button>
      </form>
    </div>
    </div>
  )
}

export default UpdateUser
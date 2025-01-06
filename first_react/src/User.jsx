import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const[user,setUser]=useState([]);

  useEffect(()=>{
    axios.get('https://backenddemomern-0d1a.onrender.com/api/user/fetch')
    .then((res)=>{
      console.log("data fetched")
      setUser(res.data.users);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  const deleteUser = (id) => {
    axios.delete(`https://backenddemomern-0d1a.onrender.com/api/user/delete/${id}`)
    .then((res)=>{
      console.log("user Deleted");
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>User</h1><br></br>
      <Link to='/create'><button style={{color:'white',backgroundColor:'violet',fontSize:20}}>create user</button></Link><br></br>
      <br></br>
      <table border={1} cellPadding={10}  >
        <thead style={{color:"red",fontSize:30,fontWeight:'bolder'}}>
        <tr >
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        </thead>
        {/* <tr>
          <td>{user[0].name}</td>
          <td>{user[0].email}</td>
          <td>{user[0].address}</td>
        </tr> */}
        <tbody style={{color:"blue",fontSize:20}}>
        {
          user.map((users)=>{
            return(
            <tr>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.address}</td>
              <td><Link to={`/update/${users._id}`}><button style={{color:"white",fontSize:20,backgroundColor:'green'}}>update user</button></Link>&nbsp;
              <button style={{color:"white",fontSize:20,backgroundColor:'red'}} onClick={()=>deleteUser(users._id)}>delete user</button></td>
            </tr>
          )})
        }
        </tbody>
      </table>
    </div>
  )
}

export default User
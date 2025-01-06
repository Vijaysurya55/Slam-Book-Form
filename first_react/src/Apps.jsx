import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import User from './User';
import CreateUser from './createUser';
import UpdateUser from './updateUser';
// import DeleteUser from './deleteUser';

const Apps = () => {
  return (
    <div>
      <h1>Welcome</h1>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<User />}/>
            <Route path = '/create' element={<CreateUser />}/>
            <Route path = '/update/:id' element={<UpdateUser />}/>
            {/* <Route path = '/delete' element={<DeleteUser />}/> */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Apps
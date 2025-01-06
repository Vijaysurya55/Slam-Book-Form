// // import './App.css';
// // import Forms from './Forms.jsx';
// // import Book from './Book.jsx';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home.jsx';
// import About from './Aboutus.jsx';
// import Contact from './Contact.jsx';
// import Navbar from './Navbar.jsx';
// function App() {
//   return (
//     <>
//       {/* <h1 style={{color:'red',fontFamily:'arial',background:'darkgoldenrod'}}>Hello world!</h1>  */} { /*inline css*/}
//       {/* <h1 class="h1" >Hello World!</h1> */}
//       {/* <Forms/>
//        */}
//        {/* <Book/> */}

//        <Router>
//         {/* <nav style={{display:'flex', alignItems:'center',background:'darkgoldenrod'}}>
//           <ol style={{listStyle:'none',display:'flex',alignContent:'center',alignItems:'center',gap:'20px'}}>
//             <li>
//               <img src="https://cdn-images.dzcdn.net/images/cover/1fa1b0ab5438ca59f964a2e52a9cac70/500x500-000000-80-0-0.jpg" alt="Avatar" style={{width:'100px',height:'100px'}}/>
//             </li>
//             <li>
//               <h1 style={{color:'red',fontFamily:'times new roman',fontWeight:'bolder',fontSize:'30px'}}>DoFlammingo</h1>
//             </li>
//             </ol>
            
//           <ol style={{listStyle:'none',display:'flex',alignContent:'center',alignItems:'center',position:'relative',left:'700px',gap:'80px'}}>
            
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About us</Link></li>
//             <li><Link to="/contact">Contact us</Link></li>
//           </ol>
//         // </nav> */}
//         <Navbar/>
//         <Routes>
//         <Route path="/" element={<Home></Home>}/>
//         <Route path="/about" element={<About></About>}/>
//         <Route path="/contact" element={<Contact></Contact>}/>
//        </Routes>
//        </Router>
//     </>
//   )
// }
// export default App




// import React from 'react'
// import List from './list'
// function App(){
// return(
//   <>
//   <List/>
//   </>
// )
// }
// export default App

// import Hooks from "./Hooks";
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Hooks/>
//     </div>
//   )
// }


// import { createContext } from 'react';
// import Hen from './Hen';
// // export let nameContext=createContext();
// export let colorContext=createContext();
// function App(){
//   return(
//     // <>
//     // <Hen need="water"/>
//     // </>
//     // <nameContext.Provider value="water">
//     // <Hen/>
//     // </nameContext.Provider> 
//     <colorContext.Provider value={{bg:'black',txt:'white'}}>
//     <Hen/>
//     </colorContext.Provider>
//   )
// }
// export default App


import React from 'react'
import Memo from './Memo'
const App = () => {
  return (
    <div>
      <Memo/>
    </div>
  )
}

export default App
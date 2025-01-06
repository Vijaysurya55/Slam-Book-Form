import React from 'react'
import {  Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo-container'>
            <div className='navbar-logo'>
                <img src="https://birdsofherme.wordpress.com/wp-content/uploads/2019/06/donquixote-pirates-jolly-roger.png"></img>
            </div>
            <div className='navbar-brand'>
                <Link to='/'>DoFlammingo</Link>
            </div>
            </div>
            <ul className='navbar-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
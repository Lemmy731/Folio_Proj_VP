import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='nav'>
        <h2 className='nav-brand'>blog2for</h2>
        <ul className='menu'>
            <li><Link to="/" style={{textDecoration: "none"}} className='menu-btn'>Home</Link></li>
            <li><Link to="/blog" style={{textDecoration: "none"}} className='menu-btn'>Post</Link></li>
        </ul>
    </div>
  )
}

export default Nav
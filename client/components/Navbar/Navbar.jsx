"use client"
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src="/assests/logo.png" alt="" />
        <ul>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/about'}>About</a></li>
                <li><a href={'/about'}>Projects</a></li>          
                <li><a href={'/contact'}>Contact</a></li>
                <li><a href={'/careers'}>Careers</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo2petit.png'

import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <img src={logo}  alt="logo"></img>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: 'bold',
          color: '#f2711c',
        }}
      >
        Produits
      </NavLink>
    </nav>
  )
}

export default Navigation

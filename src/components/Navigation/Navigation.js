import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
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

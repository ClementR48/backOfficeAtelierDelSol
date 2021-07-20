import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Produit from '../Produit/Produit'

import "./Products.css"

const Products = ({ items }) => {


  return (
    <div className="products">
        
        <Link className="button-add" to="/ajout">Ajoute un produit</Link>
     
      <ul className="liste">
        <li className='entete'>
           <span>Image</span>
           <span>Titre</span>
           <span>Description</span>
           <span>Prix</span>
           <span>Supprimer</span>
           <span>Modifier</span>
        </li>
        {items.map((item) => {
          return (
            <li key={item._id}>
              <Produit item={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products

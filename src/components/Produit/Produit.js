import axios from 'axios';
import React from 'react';
import { Edit, Trash } from 'react-feather';
import { Link } from 'react-router-dom';
import ModifyProduct from '../ModifyProduct/ModifyProduct';

import './produit.css'

const Produit = ({ item }) => {

  const deleteProduit = (id) => {
    axios.delete(`http://localhost:5500/products/${id}`)
  }

  const question = () => {
    const verification = window.confirm("Es-tu sûr de vouloir supprimer cet élément ??")
    if(verification) {
      deleteProduit(item._id)
      
    }else {
      console.log('annulé');
    }
  } 

  return (
    <div className='produit'>
      <img src={item.image} alt="" ></img>
      <h3>{item.titre}</h3>
      <p>{item.description}</p>
      <p>{item.prix}€</p>
      <Trash className="trash" onClick={() => question()} />
      <Link to={`/modification/${item._id}`}  ><Edit className="edit"/></Link>
      
      
      
    </div>
  );
};

export default Produit;
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'


const ModifyProduct = ({ items }) => {

  const [ item, setItem ] = useState('')

  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [first, setFirst] = useState('')
  const [seconde, setSeconde] = useState('')
  const [third, setThird] = useState('')
  const [categorie, setCategorie] = useState('')
  const [hauteur, setHauteur] = useState('')
  const [largeur, setLargeur] = useState('')
  const [prix, setPrix] = useState('')
  const [quantite, setQuantite] = useState('') 


  const { id } = useParams();
  let idNumber = id;

  const location = useHistory()
 
  
  const produit = items.find(product => product._id === idNumber)
  console.log(produit);
  
  const modify = () => {
    axios.put(`http://localhost:5500/products/${item._id}`, {
      titre: titre,
          description: description,
          image: image,
          
            first: first,
            seconde: seconde,
            third: third,
          
            
          
          categorie: categorie,
          
            hauteur: hauteur,
            largeur: largeur,
          
          prix: prix,
          quantite: quantite,
        })
        .then(function (res) {
          alert('Votre produit a été modifié')
        })
        .then(function()  {return location.push('/')})
        .catch(function (err) {
          alert("ERROR: votre produit n'a pas pu être enregistré")
        })
        
    }
  
  
  useEffect(() => {
    
    if(!produit){
      return location.push('/')
        
    }else {
      setItem(produit)
    setTitre(item.titre)
    setDescription(item.description)
    setCategorie(item.categorie)
    setImage(item.image)
    setPrix(item.prix)
    setQuantite(item.quantite)    
    setFirst(item.first)
    setSeconde(item.seconde)
    setThird(item.third)
    setHauteur(item.hauteur)
    setLargeur(item.largeur)
    }
    
   
    
    

  }, [item])


  if(item !== undefined) {
    return (
     
      <Form className="modify"
         onSubmit={(event) => {
           event.preventDefault()
           modify()
         }}
       >
         <Form.Field>
           <label>Titre</label>
           <input
             placeholder="titre"
             defaultValue={item.titre}
             onChange={(event) => {
               setTitre(event.target.value)
             }}
           />
         </Form.Field>
         <Form.Field>
           <label>Description</label>
           <input
             placeholder="Description"
             defaultValue={item.description}
             onChange={(event) => {
               setDescription(event.target.value)
             }}
           />
         </Form.Field>
         <Form.Field>
           <label>image principale</label>
           <input
             placeholder="image"
             defaultValue={item.image}
             onChange={(event) => {
               setImage(event.target.value)
             }}
           />
         </Form.Field>
         <Form.Field>
           <label>Mini image</label>
           <input
             placeholder="image"
             defaultValue={item.first}
             onChange={(event) => {
              setFirst(event.target.value)
             }}
           />
           <input
             placeholder="image"
             defaultValue={item.seconde}
             onChange={(event) => {
               setSeconde(event.target.value)
             }}
           />
           <input
             placeholder="image"
             defaultValue={item.third}
             onChange={(event) => {
               setThird(event.target.value)
             }}
           />
         </Form.Field>  
         <Form.Field>
           <label>Categorie</label>
           <input
             placeholder="Categorie"
             defaultValue={item.categorie}
             onChange={(event) => {
               setCategorie(event.target.value)
             }}
           />
         </Form.Field>
         <Form.Field>
           <label>Dimensions</label>
           <input
             placeholder="Hauteur"
             defaultValue={item.hauteur}
             onChange={(event) => {
               setHauteur(event.target.value)
             }}
           />
           <input
             placeholder="Largeur"
             defaultValue={item.largeur}
             onChange={(event) => {
               setLargeur(event.target.value)
             }}
           />
         </Form.Field> 
         <Form.Field>
           <label>Prix</label>
           <input
             placeholder="Prix"
             defaultValue={item.prix}
             onChange={(event) => {
               setPrix(event.target.value)
             }}
           />
         </Form.Field> 
         <Form.Field>
           <label>Quantite</label>
           <input
             placeholder="Quantité"
             defaultValue={item.quantite}
             onChange={(event) => {
               setQuantite(event.target.value)
             }}
           />
         </Form.Field>
   
         <Button type="submit">Modifier</Button>
       </Form>
     ); 
  } else{
    return <div>ok</div>
      
  }

  
 
  
};

export default ModifyProduct;
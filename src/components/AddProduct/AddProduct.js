import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useState } from 'react'

import "./AddProduct.css"

const AddProduct = () => {
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

  const post = () => {
    if (titre.length < 8) {
      console.log('le titre est trop court')
    }
    if (isNaN(hauteur)) {
      console.log('hauteur pas bonne')
    }
    if (isNaN(largeur)) {
      console.log('largeur pas bonne')
    }
    if (isNaN(prix)) {
      console.log('prix pas bonne')
    }
    if (isNaN(quantite)) {
      console.log('quantite pas bonne')
    } else {
      axios
        .post('http://localhost:5500/products', {
          titre: titre,
          description: description,
          image: image,
          miniImage: {
            first: first,
            seconde: seconde,
            third: third,
          },
          categorie: categorie,
          dimensions: {
            hauteur: hauteur,
            largeur: largeur,
          },
          prix: prix,
          quantite: quantite,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {})
    }
  }

  return (
    <Form className="form"
      onSubmit={(event) => {
        event.preventDefault()
        post()
      }}
    >
      <Form.Field>
        <label>Titre</label>
        <input
          placeholder="titre"
          defaultValue={titre}
          onChange={(event) => {
            setTitre(event.target.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="Description"
          defaultValue={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>image principale</label>
        <input
          placeholder="image"
          defaultValue={image}
          onChange={(event) => {
            setImage(event.target.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Mini image</label>
        <input
          placeholder="image"
          defaultValue={first}
          onChange={(event) => {
            setFirst(event.target.value)
          }}
        />
        <input
          placeholder="image"
          defaultValue={seconde}
          onChange={(event) => {
            setSeconde(event.target.value)
          }}
        />
        <input
          placeholder="image"
          defaultValue={third}
          onChange={(event) => {
            setThird(event.target.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Categorie</label>
        <input
          placeholder="Categorie"
          defaultValue={categorie}
          onChange={(event) => {
            setCategorie(event.target.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Dimesions</label>
        <input
          placeholder="Hauteur"
          defaultValue={hauteur}
          onChange={(event) => {
            setHauteur(parseInt(event.target.value))
          }}
        />
        <input
          placeholder="Largeur"
          defaultValue={largeur}
          onChange={(event) => {
            setLargeur(parseInt(event.target.value))
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Prix</label>
        <input
          placeholder="Prix"
          defaultValue={prix}
          onChange={(event) => {
            setPrix(parseInt(event.target.value))
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Quantite</label>
        <input
          placeholder="Quantité"
          defaultValue={quantite}
          onChange={(event) => {
            setQuantite(parseInt(event.target.value))
          }}
        />
      </Form.Field>

      <Button type="submit">Ajouter</Button>
    </Form>
  )
}

export default AddProduct

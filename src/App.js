
import 'semantic-ui-css/semantic.min.css'

import Navigation from './components/Navigation/Navigation'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from './components/Products/Products'
import AddProduct from './components/AddProduct/AddProduct'
import ModifyProduct from './components/ModifyProduct/ModifyProduct'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './app.css'

function App() {

  const [items, setItems] = useState([])
 
 

  const fetchData = () => {
    axios.get('http://localhost:5500/products').then((res) => {
      setItems(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/'>
           <Products items={items} />
          </Route>
          <Route exact path='/ajout'>
           <AddProduct />
          </Route>
          <Route exact path='/modification/:id'>
           <ModifyProduct items={items} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

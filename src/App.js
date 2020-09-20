import React from 'react'
import Home from './pages/home/home'
import { Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'



function App () {
  
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path="/shop" component={Shop} />
    </div>
  )
}

export default App

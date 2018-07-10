import React, { Component } from 'react'

import Products from './Products'

class Favorites extends Component {
  //FAVORITES NOT RENDERING CORRECTLY FIX
  render () {
    let products = JSON.parse(localStorage.getItem('user')).favorites
    return (
      <div>
        <div className='App-body-title'><p>FAVORITES</p></div>
        <Products products={products} />
      </div>
    )
  }
}

export default Favorites

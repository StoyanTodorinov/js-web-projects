import React, { Component } from 'react'

import Products from './Products'

import * as products from '../fetcher/products'

class Favorites extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    let favorites = JSON.parse(localStorage.getItem('user')).favorites
    products.getProductsByArray(favorites).then(products => {
      this.setState({ products })
    })
  }

  render () {
    return (
      <div>
        <div className='App-body-title'><p>FAVORITES</p></div>
        <Products products={this.state.products} />
      </div>
    )
  }
}

export default Favorites

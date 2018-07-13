import React, { Component } from 'react'
import Products from './Products'

import * as products from '../fetcher/products'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promoProducts: [],
      newProducts: []
    }
  }

  componentDidMount () {
    products.getPromoProducts().then(promoProducts => {
      this.setState({ promoProducts })
    })
    products.getNewProducts().then(newProducts => {
      this.setState({ newProducts })
    })
  }

  render () {
    return (
      <div>
        <div className='App-body-title'><p>{'NEW'}</p></div>
        <Products
          products={this.state.newProducts}
        />
        <div className='App-body-title'><p>{'PROMO'}</p></div>
        <Products
          products={this.state.promoProducts.slice(0, 3)}
        />
      </div>
    )
  }
}

export default Home

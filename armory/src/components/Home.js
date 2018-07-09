import React, { Component } from 'react'
import Products from './Products'

import * as fetcher from '../fetcher/products'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promoProducts: [],
      newProducts: []
    }
  }

  componentDidMount () {
    fetcher.getPromoProducts().then(promoProducts => {
      this.setState({ promoProducts })
    })
    fetcher.getNewProducts().then(newProducts => {
      this.setState({ newProducts })
    })
  }

  render () {
    return (
      <div>
        <div className='App-body-title'><p>{'NEW'}</p></div>
        <Products products={this.state.newProducts} />
        <div className='App-body-title'><p>{'PROMO'}</p></div>
        <Products products={this.state.promoProducts.slice(0, 3)} />
      </div>
    )
  }
}

export default Home

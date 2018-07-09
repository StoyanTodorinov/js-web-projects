import React, { Component } from 'react'

import * as fetcher from '../fetcher/products'
import Products from './Products'

class Promoes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    fetcher.getPromoProducts().then(products => {
      this.setState({ products })
    })
  }

  render () {
    return (
      <div>
        <div className='App-body-title'><p>PROMOES</p></div>
        <Products products={this.state.products} />
      </div>
    )
  }
}

export default Promoes

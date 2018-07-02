import React, { Component } from 'react'
import Product from './shared/Product'

import knife from '../images/knife.jpg'

class Products extends Component {
  render () {
    let title = this.props.match.params.product.toUpperCase()
    return (
      <div>
        <div className='App-body-title'><p>{title}</p></div>
        <Product name={'This is a knife'} imgUrl={knife} />
        <Product name={'This is a knife'} imgUrl={knife} />
        <Product name={'This is a knife'} imgUrl={knife} />
        <Product name={'This is a knife'} imgUrl={knife} />
        <Product name={'This is a knife'} imgUrl={knife} />
        <Product name={'This is a knife'} imgUrl={knife} />
      </div>
    )
  }
}

export default Products

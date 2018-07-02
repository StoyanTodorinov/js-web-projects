import React, { Component } from 'react'
import Product from './shared/Product'

import knife from '../images/knife.jpg'

class Products extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>FAVORITES</p></div>
        <Product name={'This is a fav knife'} imgUrl={knife} />
        <Product name={'This is a fav knife'} imgUrl={knife} />
        <Product name={'This is a fav knife'} imgUrl={knife} />
        <Product name={'This is a fav knife'} imgUrl={knife} />
        <Product name={'This is a fav knife'} imgUrl={knife} />
        <Product name={'This is a fav knife'} imgUrl={knife} />
      </div>
    )
  }
}

export default Products

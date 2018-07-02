import React, { Component } from 'react'
import Product from './shared/Product'

import knife from '../images/knife.jpg'

class Promoes extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>PROMOES</p></div>
        <Product name={'This is a promo knife'} imgUrl={knife} />
        <Product name={'This is a promo knife'} imgUrl={knife} />
        <Product name={'This is a promo knife'} imgUrl={knife} />
        <Product name={'This is a promo knife'} imgUrl={knife} />
        <Product name={'This is a promo knife'} imgUrl={knife} />
        <Product name={'This is a promo knife'} imgUrl={knife} />
      </div>
    )
  }
}

export default Promoes

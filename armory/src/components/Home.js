import React, { Component } from 'react'
import Products from './Products'

class Home extends Component {
  render () {
    return (
      <div>
        <Products title={'NEW'} />
        <Products title={'PROMO'} />
      </div>
    )
  }
}

export default Home

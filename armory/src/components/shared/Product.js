import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
  render () {
    return (
      <Link className='App-product' to='/'>
        <p>{this.props.name}</p>
        <img className='App-img-product' src={this.props.imgUrl} alt='proelia' />
      </Link>
    )
  }
}

export default Product

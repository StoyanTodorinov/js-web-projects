import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
  render () {
    return (
      <Link className='App-product' to={'/details/' + this.props.product._id}>
        <p>{this.props.product.name} {this.props.product.promo > 0 ? ' - ' + this.props.product.promo + '%' : ''}</p>
        <img className='App-img-product' src={this.props.product.img} alt='proelia' />
      </Link>
    )
  }
}

export default Product

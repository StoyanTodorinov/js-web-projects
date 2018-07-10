import React, { Component } from 'react'
import Product from './shared/Product'

class Products extends Component {
  render () {
    let productItems
    if (this.props.products && this.props.products.length > 0 && typeof this.props.products !== 'string') {
      productItems =
        this.props.products.map((product, index) => {
          return <Product key={index} product={product} />
        })
    } else {
      productItems = <div className='App-no-products'><i>No products added yet.</i></div>
    }

    return (
      <div>
        { productItems }
      </div>
    )
  }
}

export default Products

import React, { Component } from 'react'
import Product from './shared/Product'

import * as fetcher from '../fetcher/products'

class Products extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    let categoryName = this.props.match.params.categoryName
    fetcher.getProductsByCategoryName(categoryName).then(products => {
      this.setState({ products })
    })
  }

  render () {
    let title = this.props.title || this.props.match.params.categoryName.toUpperCase()
    let productItems =
      this.state.products.length === 0
        ? <div className='App-no-products'><i>No products added yet.</i></div>
        : this.state.products.map((product, index) => {
          return <Product key={index} name={product.name} imgUrl={product.img} productId={product._id} />
        })

    return (
      <div>
        <div className='App-body-title'><p>{title}</p></div>
        {productItems}
      </div>
    )
  }
}

export default Products

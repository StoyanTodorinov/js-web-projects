import React, { Component } from 'react'
import Products from './Products'

import * as fetcher from '../fetcher/products'

class CategoryProducts extends Component {
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
    return (
      <div>
        <div className='App-body-title'><p>{title}</p></div>
        <Products products={this.state.products} />
      </div>
    )
  }
}

export default CategoryProducts

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    let user = localStorage.getItem('user')
    let to = '/create/' + this.props.match.params.categoryName
    let addProduct = user ? <button className='App-to-product-create'><Link className='App-create-link' to={to}>Create product</Link></button> : ''
    let title = this.props.title || this.props.match.params.categoryName.toUpperCase()
    return (
      <div>
        <div className='App-body-title'>
          <p>
            {title}
          </p>
          {addProduct}
        </div>
        <Products products={this.state.products} />
      </div>
    )
  }
}

export default CategoryProducts

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryItem extends Component {
  render () {
    return (
      <Link className='App-category-item' to='/categories/knives'>
        <p>{this.props.name}</p>
      </Link>
    )
  }
}

export default CategoryItem

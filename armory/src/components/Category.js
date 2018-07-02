import React, { Component } from 'react'
import CategoryItem from './shared/CategoryItem'

export default class Category extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>CATEGORIES</p></div>
        <CategoryItem name={'Firearms'} />
        <CategoryItem name={'Knives'} />
        <CategoryItem name={'Hatchets'} />
        <CategoryItem name={'Armors'} />
        <CategoryItem name={'Axes'} />
        <CategoryItem name={'Survival'} />
      </div>
    )
  }
}

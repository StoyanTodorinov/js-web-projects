import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderAddition extends Component {
  render () {
    return (
      <div className='App-header-addition-container'>
        <Link className='App-header-addition-link' to='/'>Home</Link>
        <Link className='App-header-addition-link' to='/promoes'>Promoes</Link>
        <Link className='App-header-addition-link' to='/categories'>Categories</Link>
        <Link className='App-header-addition-link' to='/myProfile'>My profile</Link>
      </div>
    )
  }
}

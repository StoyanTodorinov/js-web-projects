import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export default class Header extends Component {
  render () {
    return (
      <header className='App-header' >
        <ul className='App-nav-list'>
          <li className='App-nav-list-item App-nav-float-left'>
            <Link to='/'><img src={logo} className='App-logo' alt='logo' /></Link>
          </li>
          <li className='App-nav-list-item'>
            <a className='App-title'>Welcome to the armory</a>
          </li>
          <li className='App-nav-list-item'>
            <Link className='App-nav-link' to='/login'>Sign in</Link>
          </li>
          <li className='App-nav-list-item'>
            <Link className='App-nav-link' to='/register'>Sign up</Link>
          </li>
          <li className='App-nav-list-item'>
            <Link className='App-nav-link' to='/favorites'>Favorites</Link>
          </li>
          <li className='App-nav-list-item'>
            <Link className='App-nav-link' to='/logout'>Logout</Link>
          </li>
        </ul>
      </header>
    )
  }
}

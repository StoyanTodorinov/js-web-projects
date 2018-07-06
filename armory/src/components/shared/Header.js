import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <header className='App-header' >
        <ul className='App-nav-list'>
          <li className='App-nav-list-item App-nav-float-left'>
            <Link to='/'><img src={this.props.logo} className='App-logo' alt='logo' /></Link>
          </li>
          <li className='App-nav-list-item'>
            <a className='App-title'>Welcome to the armory</a>
          </li>
          {this.props.isLogged
            ? <div>
              <li className='App-nav-list-item'>
                <Link className='App-nav-link' to='/favorites'>Favorites</Link>
              </li>
              <li className='App-nav-list-item'>
                <Link className='App-nav-link' to='/logout' onClick={this.props.logout}>Logout</Link>
              </li>
            </div>
            : <div>
              <li className='App-nav-list-item'>
                <Link className='App-nav-link' to='/login'>Login</Link>
              </li>
              <li className='App-nav-list-item'>
                <Link className='App-nav-link' to='/register'>Register</Link>
              </li>
            </div>
          }
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
}

export default Header

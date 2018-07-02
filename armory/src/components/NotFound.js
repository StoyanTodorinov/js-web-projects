import React, { Component } from 'react'

class NotFound extends Component {
  render () {
    return (
      <div className='App-not-found'>
        <h1>404</h1>
        <h2>OOPS! Page not found</h2>
        <p>URL <b className='App-not-found-url'>{this.props.match.url}</b> is not present on the server</p>
      </div>
    )
  }
}

export default NotFound

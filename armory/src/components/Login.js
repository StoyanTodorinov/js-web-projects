import React, { Component } from 'react'

class Login extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>LOGIN</p></div>
        <form className='App-auth' method='POST'>
          <p>
            <label for='username'>
            Username: <input className='App-form-input' type='text' id='username' name='username' />
            </label>
          </p>
          <p>
            <label for='password'>
            Password: <input className='App-form-input' type='password' id='password' name='password' />
            </label>
          </p>
          <input className='App-form-submit' type='submit' id='password' name='password' />
        </form>
      </div>
    )
  }
}

export default Login

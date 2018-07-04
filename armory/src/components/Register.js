import React, { Component } from 'react'

class Register extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>REGISTER</p></div>
        <form className='App-auth' method='POST'>
          <p>
            <label for='username'>
              Username<input className='App-form-input' type='text' id='username' name='username' required />
            </label>
          </p>
          <p>
            <label for='email'>
              Email<input className='App-form-input' type='email' id='email' name='email' required />
            </label>
          </p>
          <p>
            <label for='password'>
              Password<input className='App-form-input' type='password' id='password' name='password' required />
            </label>
          </p>
          <p>
            <label for='password2'>
              Confirm Password<input className='App-form-input' type='password2' id='password2' name='password2' required />
            </label>
          </p>
          <input className='App-form-submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default Register

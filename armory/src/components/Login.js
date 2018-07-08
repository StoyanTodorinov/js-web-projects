import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  inputChange = (e, key) => {
    this.state[key] = e.target.value
    this.setState(this.state)
  }

  formSubmit = e => {
    e.preventDefault()
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <div className='App-body-title'><p>LOGIN</p></div>
        <div className='App-body-error'><p>{this.state.error}</p></div>
        <form className='App-auth' onSubmit={this.formSubmit}>
          <p>
            <label>
              Username<input className='App-form-input' type='text' id='username' name='username'
               value={this.state.username} onChange={(e) => this.inputChange(e, 'username')} required />
            </label>
          </p>
          <p>
            <label>
              Password<input className='App-form-input' type='password' id='password' name='password'
               value={this.state.password} onChange={(e) => this.inputChange(e, 'password')} required />
            </label>
          </p>
          <input className='App-form-submit' type='submit' id='submit' name='password' />
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login

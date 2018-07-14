import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      name: '',
      password2: '',
      email: ''
    }
  }

  inputChange = (e, key) => {
    let state = this.state
    state[key] = e.target.value
    this.setState(state)
  }

  formSubmit = e => {
    e.preventDefault()
    let user = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      password2: this.state.password2,
      imgUrl: this.state.imgUrl
    }
    let toReturn = this.validateUserData(user)
    if (toReturn)
      return
    this.props.register(user).then(res => {
      if (res.code) {
        this.props.createNotification('Error', 'Username already exists')
        return
      }
      this.props.createNotification('success', 'Registered')
      this.props.updateAppState()
      this.props.history.push('/')
    })
  }

  validateUserData(user) {
    if (user.name.length < 4) {
      this.props.createNotification('error', 'Name should be at least 4 symbols long')
      return true
    }
    if (user.username.length < 4) {
      this.props.createNotification('error', 'Username should be at least 4 symbols long')
      return true
    }
    if (user.password.length < 6) {
      this.props.createNotification('error', 'Password should be at least 6 symbols long')
      return true
    }
    if (user.password2.length !== user.password.length) {
      this.props.createNotification('error', "Passwords don't match")
      return true
    }
    return false
  }

  render() {
    return (
      <div>
        <div className='App-body-title'><p>REGISTER</p></div>
        <form className='App-auth' onSubmit={this.formSubmit}>
          <p>
            <label>
              Name<input className='App-form-input' type='text' id='name' name='name'
                value={this.state.name} onChange={(e) => this.inputChange(e, 'name')} required />
            </label>
          </p>
          <p>
            <label>
              Username<input className='App-form-input' type='text' id='username' name='username'
                value={this.state.username} onChange={(e) => this.inputChange(e, 'username')} required />
            </label>
          </p>
          <p>
            <label>
              Email<input className='App-form-input' type='email' id='email' name='email'
                value={this.state.email} onChange={(e) => this.inputChange(e, 'email')} required />
            </label>
          </p>
          <p>
            <label>
              Password<input className='App-form-input' type='password' id='password' name='password'
                value={this.state.password} onChange={(e) => this.inputChange(e, 'password')} required />
            </label>
          </p>
          <p>
            <label>
              Confirm Password<input className='App-form-input' type='password' id='password2' name='password2'
                value={this.state.password2} onChange={(e) => this.inputChange(e, 'password2')} required />
            </label>
          </p>
          <input className='App-form-submit' type='submit' />
        </form>
      </div>
    )
  }
}

Register.propType = {
  register: PropTypes.func.isRequired,
  createNotification: PropTypes.func.isRequired,
  updateAppState: PropTypes.func.isRequired
}

export default Register

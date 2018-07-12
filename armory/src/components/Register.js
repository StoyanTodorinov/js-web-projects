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
    this.props.register(user)
    this.props.history.push('/')
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
  register: PropTypes.func.isRequired
}

export default Register

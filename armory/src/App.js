import React, { Component } from 'react'

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import HeaderAddition from './components/shared/HeaderAddition'
import AppRouter from './components/router/AppRouter'
import * as fetcher from './fetcher/users'

import logo from './images/logo.png'
import './App.css'

// TODO VALIDATIONS!
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: localStorage.getItem('user'),
      isLogged: localStorage.getItem('user') ? true : false
    }
  }

  login = user => {
    fetcher.login(user).then(() => {
      this.checkLogged()
    })
  }

  register = user => {
    fetcher.register(user).then(() => {
      this.checkLogged()
    })
  }

  logout = () => {
    fetcher.logout()
    this.checkLogged()
  }

  update = user => {
    fetcher.update(user)
  }

  checkLogged = () => {
    let user = localStorage.getItem('user')
    this.setState({
      user,
      isLogged: user ? true : false
    })
  }

  componentWillMount() {
    this.checkLogged() 
  }

  render() {
    return (
      <div className='App-body'>
        <Header
          logo={logo}
          logout={this.logout}
          isLogged={this.state.isLogged}
        />
        {this.state.isLogged ? <HeaderAddition /> : null}
        <div className='App-intro'>
          <div className='App-content'>
            <AppRouter
              user={JSON.parse(this.state.user)}
              login={this.login}
              register={this.register}
              logout={this.logout}
              update={this.update}
              isLogged={this.state.isLogged}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

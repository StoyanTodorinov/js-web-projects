import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import HeaderAddition from './components/shared/HeaderAddition'
import AppRouter from './components/router/AppRouter'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = props
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App-body'>
          <Header />
          <HeaderAddition />
          <div className='App-intro'>
            <div className='App-content'>
              <AppRouter />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

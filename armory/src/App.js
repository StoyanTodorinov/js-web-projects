import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderAddition from './components/HeaderAddition';
import Category from './components/Category';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <body className="App-body">
          <HeaderAddition />
          <div className="App-intro">
            <Category />
          </div>
        </body>
        <Footer />
      </div>
    );
  }
}

export default App;

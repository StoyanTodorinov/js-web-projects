import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="nav-list">
            <li className="nav-list-item nav-float-left">
              <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            </li>
            <li className="nav-list-item">
              <a className="App-title">Welcome to the armory</a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link" href="/login">Sign in</a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link" href="/register">Sign up</a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link" href="/favorites">Favorites</a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link" href="/favorites">Logout</a>
            </li>
          </ul>
        </header>
        <body className="App-body">
          <div>
            <div className="App-header-addition-container">
              <div className="App-header-addition-item">
                <a className="App-header-addition-link" href="/">Home</a>
              </div>
              <div className="App-header-addition-item">
                <a className="App-header-addition-link" href="/favorites">Promoes</a>
              </div>
              <div className="App-header-addition-item">
                <a className="App-header-addition-link" href="/favorites">Categories</a>
              </div>
              <div className="App-header-addition-item">
                <a className="App-header-addition-link" href="/favorites">My profile</a>
              </div>
            </div>
          </div>
          <div className="App-intro">
            <p>This is a simple site for browsing some weapons and overall having fun</p>
          </div>
        </body>
        <footer className="App-footer">
          Copyright &copy; 2018 Designed and developed by <a className="footer-link" target="_blank" rel="noopener" href="https://github.com/StoyanTodorinov">StoyanT</a>
        </footer>
      </div>
    );
  }
}

export default App;

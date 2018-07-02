import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header" >
                <ul className="App-nav-list">
                    <li className="App-nav-list-item App-nav-float-left">
                        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    </li>
                    <li className="App-nav-list-item">
                        <a className="App-title">Welcome to the armory</a>
                    </li>
                    <li className="App-nav-list-item">
                        <a className="App-nav-link" href="/login">Sign in</a>
                    </li>
                    <li className="App-nav-list-item">
                        <a className="App-nav-link" href="/register">Sign up</a>
                    </li>
                    <li className="App-nav-list-item">
                        <a className="App-nav-link" href="/favorites">Favorites</a>
                    </li>
                    <li className="App-nav-list-item">
                        <a className="App-nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
            </header>
        )
    }
}
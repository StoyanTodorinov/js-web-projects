import React, { Component } from 'react'

export default class HeaderAddition extends Component {
    render() {
        return (
            <div className="App-header-addition-container">
                <div className="App-header-addition-item">
                    <a className="App-header-addition-link" href="/">Home</a>
                </div>
                <div className="App-header-addition-item">
                    <a className="App-header-addition-link" href="/promoes">Promoes</a>
                </div>
                <div className="App-header-addition-item">
                    <a className="App-header-addition-link" href="/categories">Categories</a>
                </div>
                <div className="App-header-addition-item">
                    <a className="App-header-addition-link" href="/myProfile">My profile</a>
                </div>
            </div>
        )
    }
} 
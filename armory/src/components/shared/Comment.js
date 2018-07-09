import React, { Component } from 'react'

class Comment extends Component {

  constructor() {
    super()

    this.state = {
      showMenu: false
    }
  }

  selectBoxShow = (e) => {
    e.preventDefault()

    this.setState({
      showMenu: true
    })
  }

  render() {
    return (
      <div>
        <div className='App-comment'>
          <span className='App-comment-name'>{this.props.name}</span>
          <span className='App-comment-time'>{this.props.time + ' ago'}</span>
          <p className='App-comment-text'>{' - ' + this.props.text}</p>
        </div>
        <div className='App-comment-btn-wrapper'>
          <button className='App-comment-btn'>
            Edit
          </button>
          <button className='App-comment-btn'>
            Remove
          </button>
        </div>
        <hr />
      </div>
    )
  }
}

export default Comment

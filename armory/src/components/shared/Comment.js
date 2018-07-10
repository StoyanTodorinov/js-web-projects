import React, { Component } from 'react'

class Comment extends Component {
  // TODO EDIT AND REMOVE COMMENTS

  render() {
    return (
      <div>
        <div className='App-comment'>
          <span className='App-comment-name'>{this.props.name}</span>
          <span className='App-comment-time'>{this.props.time}</span>
          <p className='App-comment-text'>{' - ' + this.props.text}</p>
        </div>
        {this.props.isCreator ?
          <div className='App-comment-btn-wrapper'>
            <button className='App-comment-btn'>
              Edit
          </button>
            <button className='App-comment-btn'>
              Remove
          </button>
          </div>
          : ''}
        <hr />
      </div>
    )
  }
}

export default Comment

import React, { Component } from 'react'

import Comment from './shared/Comment'

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      text: '',
      comments: this.props.comments
    }
  }

  inputChange = (e, key) => {
    this.state[key] = e.target.value
    this.setState(this.state)
  }

  handleBtnOnClick = () => {
    if (this.state.isEditing) {
      let comment = {
        text: this.state.text,
        productId: this.props.productId,
        author: JSON.parse(localStorage.getItem('user')).username
      }
      this.props.addComment(comment)
    }
    this.setState({ isEditing: !this.state.isEditing, text: '' })
  }

  render() {
    let comments = this.props.comments.map((comment, index) => {
      return (
        <Comment
          key={index}
          comment={comment}
          isCreator={this.props.author === comment.author}
          deleteComment={this.props.deleteComment}
          updateComment={this.props.updateComment}
        />
      )
    })

    let button = this.state.isEditing ? 'Post new comment' : 'Add new comment'
    let input = this.state.isEditing ? <input className='App-add-comment-input' type='text'
      value={this.state.text} onChange={(e) => this.inputChange(e, 'text')} required /> : ''

    return (
      <div className='App-comments'>
        <div className='App-body-title'><p>Comments</p></div>
        <div className='App-details-comments'>
          {comments}
          <div className='App-add-comment-btn'>
            {input}
            <button className='App-add-comment' onClick={this.handleBtnOnClick}>
              {button}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

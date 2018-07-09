import React, { Component } from 'react'

import Comment from './shared/Comment'

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      text: ''
    }
  }

  inputChange = (e, key) => {
    this.state[key] = e.target.value
    this.setState(this.state)
  }

  // TODO ADD COMMENT TO THE DATABASE
  handleBtnOnClick = () => {
    if (this.state.isEditing) {
      console.log(this.state.text)
      console.log(this.props.productId)
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    return (
      <div className='App-comments'>
        <div className='App-body-title'><p>Comments</p></div>
        <div className='App-details-comments'>
          <Comment name={'Stoyan'} time={'10 mins'} text />
          <Comment name={'Stoyan'} time={'1 year'} text />
          <Comment name={'Stoyan'} time={'2 hours'} text />
          <div className='App-add-comment-btn'>
            {this.state.isEditing ? <input className='App-form-input' type='text'
              value={this.state.text} onChange={(e) => this.inputChange(e, 'text')} required /> : ''}
            <button className='App-add-comment' onClick={this.handleBtnOnClick}>
              {this.state.isEditing
                ? 'Post new comment'
                : 'Add new comment'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

import React, { Component } from 'react'

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      text: this.props.comment.text,
      date: '',
      comment: this.props.comment
    }
  }
  // TODO IMPLEMENT DATE FORMATTER
  formatTime = (date) => {
    let dateFormat = new Date(date)
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = dateFormat.getDate();
    let monthIndex = dateFormat.getMonth();
    let year = dateFormat.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  editClick = () => {
    if (this.state.isEditing) {
      let comment = this.state.comment
      comment.text = this.state.text
      console.log(comment)
      this.props.updateComment(comment)
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  inputChange = (e, key) => {
    this.state[key] = e.target.value
    this.setState(this.state)
  }

  render() {
    let btnText = this.state.isEditing ? 'Save' : 'Edit'
    let commentText = this.state.isEditing
      ? <p><input className='App-comment-edit-input' type='text' value={this.state.text} onChange={(e) => this.inputChange(e, 'text')} required /></p>
      : <p className='App-comment-text'>{' - ' + this.state.comment.text}</p>

      let authorBtns = this.props.isCreator
        ? <div className='App-comment-btn-wrapper'>
          <button className='App-comment-btn' onClick={this.editClick}>
            {btnText}
          </button>
          <button className='App-comment-btn' onClick={() => this.props.deleteComment(this.props.comment._id)}>
            Remove
        </button>
        </div>
        : ''

    return (
      <div>
        <div className='App-comment'>
          <span className='App-comment-name'>{this.state.comment.author}</span>
          <span className='App-comment-time'>{this.formatTime(this.state.comment.date)}</span>
          {commentText}
        </div>
        {authorBtns}
        <hr />
      </div>
    )
  }
}

export default Comment

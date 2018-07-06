import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      name: this.props.user.name,
      email: this.props.user.email,
      imgUrl: this.props.user.imgUrl
    }
  }

  editClick = () => {
    if (this.state.isEditing) {
      let user = JSON.parse(localStorage.getItem('user'))
      user.imgUrl = this.state.imgUrl
      user.name = this.state.name
      user.email = this.state.email
      localStorage.setItem('user', JSON.stringify(user))
      this.props.update(user)
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  inputChange = (e, key) => {
    this.state[key] = e.target.value
    this.setState(this.state)
  }

  render() {
    return (
      <div>
        <div className='App-body-title'><p>MY PROFILE</p></div>
        <div className='App-details'>
          <p>{'Username: ' + this.props.user.username}</p>
          {this.state.isEditing ?
            <div>
              <p>
                <label>
                  Name: <input className='App-form-input' type='text' value={this.state.name} onChange={(e) => this.inputChange(e, 'name')} required />
                </label>
              </p>
              <p>
                <label>
                  Email: <input className='App-form-input' type='text' value={this.state.email} onChange={(e) => this.inputChange(e, 'email')} required />
                </label>
              </p>
              <p>
                <label>
                  Image url: <input className='App-form-input' type='text' value={this.state.imgUrl} onChange={(e) => this.inputChange(e, 'imgUrl')} required />
                </label>
              </p>
            </div>
            :
            <div>
              <p>{'Name: ' + this.state.name}</p>
              <p>{'Email: ' + this.state.email}</p>
            </div>
          }
          <button className='App-profile-btn' onClick={this.editClick}>
            {this.state.isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className='App-details-img-container'>
          <img className='App-details-img' src={this.state.imgUrl ||
            'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'} alt={'Profile picture'} />
        </div>
      </div>
    )
  }
}

MyProfile.propTypes = {
  user: PropTypes.object.isRequired
}

export default MyProfile

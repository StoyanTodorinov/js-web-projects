import React, { Component } from 'react'
import Knife from '../images/proelia.jpg'

class MyProfile extends Component {
  render () {
    let user = {
      username: 'StoyanT',
      name: 'Stoyan Todorinov',
      email: 's.todorinov@yahoo.com'
    }
    return (
      <div>
        <div className='App-body-title'><p>MY PROFILE</p></div>
        <div className='App-details'>
          <p>{'Name: ' + user.name}</p>
          <p>{'Username: ' + user.username}</p>
          <p>{'Email: ' + user.email}</p>
          <button className='App-profile-btn'>
            Edit
          </button>
        </div>
        <div className='App-details-img-container'>
          <img className='App-details-img' src={Knife} alt={'profile picture'} />
        </div>
      </div>
    )
  }
}

export default MyProfile

import React, { Component } from 'react'

class Create extends Component {
  render () {
    return (
      <div>
        <div className='App-body-title'><p>CREATE</p></div>
        <form className='App-auth' method='POST'>
          <p>
            <label for='name'>
              Name<input className='App-form-input' type='text' id='name' name='name' required />
            </label>
          </p>
          <p>
            <label for='image'>
              Image<input className='App-form-input' type='text' id='image' name='image' required />
            </label>
          </p>
          <p>
            <label for='description'>
              Description<textarea className='App-form-input' type='description' id='description' name='description' required />
            </label>
          </p>
          <p>
            <label for='addition'>
              Addition Information<textarea className='App-form-input' type='text' id='addition' name='addition' required />
            </label>
          </p>
          <input className='App-form-submit' type='submit' id='password' name='password' />
        </form>
      </div>
    )
  }
}

export default Create

import React, { Component } from 'react'
import * as categories from '../fetcher/categories'

class Create extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()
    let category = {
      name: this.state.name
    }
    categories.create(category).then(() => {
      this.props.history.push('/categories')
    })
  }

  inputChange = (e, key) => {
    let state = this.state
    state[key] = e.target.value
    this.setState(state)
  }

  render () {
    return (
      <div>
        <div className='App-body-title'><p>CREATE</p></div>
        <form className='App-auth' onSubmit={this.onSubmit}>
          <p>
            Name<input className='App-form-input' value={this.state.name} onChange={e => this.inputChange(e, 'name')} required />
          </p>
          <input className='App-form-submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default Create

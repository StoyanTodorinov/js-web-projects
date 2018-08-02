import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as categories from '../fetcher/categories'

class CreateCategory extends Component {
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
    if (category.name.length < 3) {
      this.props.createNotification('Error', 'Category name must be at least 3 symbols long')
      return
    }
    console.log(category)
    categories.create(category).then(res => {
      if (res.code) {
        this.props.createNotification('Error', 'Category already exists')
        return
      }
      this.props.createNotification('success', 'Category created')
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

CreateCategory.propTypes = {
  createNotification: PropTypes.func.isRequired
}

export default CreateCategory

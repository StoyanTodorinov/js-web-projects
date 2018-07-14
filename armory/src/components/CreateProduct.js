import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as products from '../fetcher/products'

class CreateProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: '',
      imgUrl: '',
      description: '',
      additionalInformation: ''
    }
  }

  inputChange = (e, key) => {
    let state = this.state
    state[key] = e.target.value
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()
    let additionalInformation = []
    if (typeof this.state.additionalInformation === 'string' && this.state.additionalInformation.length > 0) {
      additionalInformation =
        this.state.additionalInformation.split(',').map(item => item.trim())
    }
    let product = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.imgUrl,
      description: this.state.description,
      additionalInformation: additionalInformation,
      categoryName: this.props.match.params.categoryName,
    }
    let toReturn = this.validateProduct(product)
    if (toReturn)
      return
    products.create(product).then(() => {
      this.props.createNotification('success', 'Product created')
      this.props.history.goBack()
    })
  }

  validateProduct(product) {
    if (product.name.length < 3) {
      this.props.createNotification('error', 'Name must be at least 3 symbols long')
      return true
    }
    if (product.description.length < 15) {
      this.props.createNotification('error', 'Description must be at least 15 symbols long')
      return true
    }
  }

  render() {
    return (
      <div>
        <div className='App-body-title'><p>CREATE</p></div>
        <form className='App-auth' onSubmit={this.onSubmit}>
          <p>
            Name<input className='App-form-input' value={this.state.name} onChange={e => this.inputChange(e, 'name')} required />
          </p>
          <p>
            Price<input className='App-form-input' type='number' value={this.state.price} onChange={e => this.inputChange(e, 'price')} required />
          </p>
          <p>
            Image Url<input className='App-form-input' type='url' value={this.state.imgUrl} onChange={e => this.inputChange(e, 'imgUrl')} required />
          </p>
          <p>
            Description<textarea className='App-form-input' value={this.state.description} onChange={e => this.inputChange(e, 'description')} required />
          </p>
          <p>
            Addition Information <i>(optional)</i><textarea className='App-form-input' value={this.state.additionalInformation} onChange={e => this.inputChange(e, 'additionalInformation')} />
          </p>
          <input className='App-form-submit' type='submit' />
        </form>
      </div>
    )
  }
}

CreateProduct.propTypes = {
  createNotification: PropTypes.func.isRequired
}

export default CreateProduct

import React, { Component } from 'react'

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
    let additionalInformation =
      this.state.additionalInformation.split(',').map(item => item.trim())
    let product = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.imgUrl,
      description: this.state.description,
      additionalInformation: additionalInformation,
      categoryName: this.props.match.params.categoryName,
    }
    products.create(product).then(() => {
      this.props.history.goBack()
    })
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
            Image Url<input className='App-form-input' value={this.state.imgUrl} onChange={e => this.inputChange(e, 'imgUrl')} required />
          </p>
          <p>
            Description<textarea className='App-form-input' value={this.state.description} onChange={e => this.inputChange(e, 'description')} required />
          </p>
          <p>
            Addition Information<textarea className='App-form-input' value={this.state.additionalInformation} onChange={e => this.inputChange(e, 'additionalInformation')} />
          </p>
          <input className='App-form-submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default CreateProduct

import React, { Component } from 'react'
import * as products from '../fetcher/products'

class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {},
      name: '',
      price: '',
      img: '',
      promo: '',
      description: '',
      additionalInformation: ''
    }
  }

  inputChange = (e, key) => {
    let product = this.state.product
    product[key] = e.target.value
    this.setState(product)
  }

  onSubmit = e => {
    e.preventDefault()
    let additionalInformation =
      this.state.additionalInformation.split(',').map(item => item.trim())
    let product = this.state.product
    product.additionalInformation = additionalInformation
    products.update(product).then(() => {
      this.props.history.goBack()
    })
  }

  componentDidMount() {
    let id = this.props.match.params.productId
    products.getProductById(id).then(product => {
      let additionalInformation = product.additionalInformation.join(', ')
      this.setState({
        product,
        additionalInformation,
        name: product.name,
        price: product.price,
        promo: product.promo,
        img: product.img,
        description: product.description
      })
    })
    console.log(this.state.additionalInformation)
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
            Image Url<input className='App-form-input' value={this.state.img} onChange={e => this.inputChange(e, 'imgUrl')} required />
          </p>
          <p>
            Promo<input className='App-form-input' type='number' value={this.state.promo} onChange={e => this.inputChange(e, 'promo')} required />
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

export default Create

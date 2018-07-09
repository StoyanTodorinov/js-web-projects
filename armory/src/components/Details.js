import React, { Component } from 'react'

import * as fetcher from '../fetcher/products'
import Comments from '../components/Comments'

class Details extends Component {
  constructor (props) {
    super(props)

    this.state = {
      product: {}
    }
  }

  formatAdditionalInformation (data) {
    let result = ''
    for (const key in data) {
      result += key + ': ' + data[key] + '<br />'
    }
    return result
  }

  componentDidMount () {
    fetcher.getProductById(this.props.match.params.productId).then(product => {
      this.setState({ product })
    })
    // TODO GET COMMENTS AND MAKE LOGGED USERS AVALIABLE TO WRITE COMMENTS
  }

  render () {
    let product = this.state.product
    // TODO RENDER ADDITIONAL INFORMATION
    return (
      <div>
        {product !== {}
          ? <div>
            <div className='App-body-title'><p>{product.name} details</p></div>
            <div className='App-details'>
              <p>{'Name: ' + product.name}</p>
              <p>{'Price: ' + product.price}</p>
              <p>{'Description: ' + product.description}</p>
              {this.state.additionalInformation !== {}
                ? this.state.additionalInformation
                : ''}
            </div>
            <div className='App-details-img-container'>
              <img className='App-details-img' src={this.state.product.img} alt={this.state.product.name} />
            </div>
          </div>
          : 'Loading...'}

        {/* TODO ADD COMMENTS COMPONENT AND RENDER ALL THERE, ADD ADD COMMENT BUTTON */}
        {localStorage.getItem('user')
          ? <Comments productId={this.state.product._id} />
          : ''}
      </div>
    )
  }
}

export default Details

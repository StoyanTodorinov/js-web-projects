import React, { Component } from 'react'

import * as fetcher from '../fetcher/products'
import Comment from '../components/shared/Comment'

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

        {/* if logged user */}
        <div className='App-body-title'><p>Comments</p></div>
        <div className='App-details-comments'>
          <Comment name={'Stoyan'} time={'10 mins'} text />
          <hr />
          <Comment name={'Stoyan'} time={'1 year'} text />
          <hr />
          <Comment name={'Stoyan'} time={'2 hours'} text />
          <hr />
        </div>
      </div>
    )
  }
}

export default Details

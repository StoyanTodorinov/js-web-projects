import React, { Component } from 'react'

import Comment from '../components/shared/Comment' 
import Knife from '../images/knife.jpg'

class Details extends Component {
  render () {
    let title = this.props.match.params.productId.toUpperCase()
    let knife = {
      name: 'Proelia',
      weight: '145g',
      description: 'A very beautiful stainless steel folding knife'
    }
    let text = 'It is a nice knife'
    return (
      <div>
        <div className='App-body-title'><p>{title} details</p></div>
        <div className='App-details'>
          <p>{'Name: ' + knife.name}</p>
          <p>{'Weight: ' + knife.weight}</p>
          <p>{'Description: ' + knife.description}</p>
        </div>
        <div className='App-details-img-container'>
          <img className='App-details-img' src={Knife} alt={title + ' image'} />
        </div>
        {/* if logged user */}
        <div className='App-body-title'><p>Comments</p></div>
        <div className='App-details-comments'>
          <Comment name={'Stoyan'} time={'10 mins'} text={text} />
          <hr />
          <Comment name={'Stoyan'} time={'1 year'} text={text} />
          <hr />
          <Comment name={'Stoyan'} time={'2 hours'} text={text} />
          <hr />
        </div>
      </div>
    )
  }
}

export default Details

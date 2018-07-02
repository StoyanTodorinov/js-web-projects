import React, { Component } from 'react'

class Details extends Component {
  render () {
    let title = this.props.match.params.productId.toUpperCase()
    return (
      <div className='App-body-title'><p>{title} details</p></div>
    )
  }
}

export default Details

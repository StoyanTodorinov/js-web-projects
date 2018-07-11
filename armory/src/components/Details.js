import React, { Component } from 'react'

import * as products from '../fetcher/products'
import * as comments from '../fetcher/comments'

import Comments from '../components/Comments'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {},
      comments: [],
      user: JSON.parse(localStorage.getItem('user')),
      isAdded: false
    }
  }

  updateComment = (comment) => {
    comments.updateComment(comment).then()
  }

  deleteComment = (commentId) => {
    // TODO FIX REMOVING COMMENTS MAKING A PROBLEM
    comments.deleteComment(commentId).then(() => {
      this.setState({
        comments: this.state.comments
          .filter(comment => comment._id !== commentId)
      })
    })
  }

  addComment = (comment) => {
    comments.createComment(comment).then((newComment) => {
      this.setState({ comments: [...this.state.comments, newComment] })
    })
  }

  addProductToFavorites = () => {
    let id = this.props.match.params.productId
    let user = this.state.user
    if (!this.state.isAdded) {
      user.favorites = [...user.favorites, id]
    } else {
      user.favorites = user.favorites.filter(x => x !== id)
    }
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({ isAdded: !this.state.isAdded, user })
    this.props.update(user)
  }

  formatAdditionalInformation(data) {
    let result = ''
    for (const key in data) {
      result += key + ': ' + data[key] + '<br />'
    }
    return result
  }

  componentDidMount() {
    let id = this.props.match.params.productId
    products.getProductById(id).then(product => {
      this.setState({
        product
      })
    })
    comments.getProductComments(id).then(comments => {
      this.setState({ comments })
    })
    if (this.state.user) {
      this.setState({
        isAdded: this.state.user.favorites
          .indexOf(this.props.match.params.productId) > -1
      })
    }
  }

  render() {
    let product = this.state.product
    // TODO RENDER ADDITIONAL INFORMATION
    let additionalInformation = ''
    let price = product.promo > 0 ?
      (+product.price - +product.price * (product.promo / 100)).toFixed(2)
      + ' (' + product.price + ')'
      : product.price
    let user = localStorage.getItem('user')
    return (
      <div>
        {product !== {}
          ? <div>
            <div className='App-body-title'>
              <p>{product.name} details</p>
              {user ? <button className='App-add-to-favorites-btn' onClick={this.addProductToFavorites}>{this.state.isAdded ? 'Remove from favorites' : 'Add to favorites'}</button> : ''}
            </div>
            <div className='App-details'>
              <p>{'Name: ' + product.name}</p>
              <p>{'Price: ' + price}</p>
              <p>{'Description: ' + product.description}</p>
              {additionalInformation}
            </div>
            <div className='App-details-img-container'>
              <img className='App-details-img' src={this.state.product.img} alt={this.state.product.name} />
            </div>
          </div>
          : 'Loading...'}

        {this.state.user
          ? <Comments
            productId={this.state.product._id}
            comments={this.state.comments}
            author={this.state.user.username}
            addComment={this.addComment}
            deleteComment={this.deleteComment}
            updateComment={this.updateComment}
          />
          : ''}
      </div>
    )
  }
}

export default Details

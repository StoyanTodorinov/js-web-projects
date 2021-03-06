import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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

  updateComment = comment => {
    comments.updateComment(comment).then()
  }

  deleteComment = commentId => {
    comments.deleteComment(commentId).then(() => {
      this.fetchComments(this.state.product._id)
    })
  }

  addComment = comment => {
    comments.createComment(comment).then((newComment) => {
      this.setState({ comments: [...this.state.comments, newComment] })
    })
  }

  addProductToFavorites = () => {
    let id = this.props.match.params.productId
    let user = this.state.user
    if (!this.state.isAdded) {
      this.props.createNotification('info', 'Added to favorites')
      user.favorites = [...user.favorites, id]
    } else {
      this.props.createNotification('info', 'Removed from favorites')
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

  fetchComments(id) {
    comments.getProductComments(id).then(comments => {
      this.setState({ comments })
    })
  }

  componentDidMount() {
    let id = this.props.match.params.productId
    products.getProductById(id).then(product => {
      this.setState({
        product
      })
    })
    this.fetchComments(id)
    if (this.state.user) {
      this.setState({
        isAdded: this.state.user.favorites
          .indexOf(this.props.match.params.productId) > -1
      })
    }
  }

  render() {
    let product = this.state.product
    let additionalInformation = ''
    if (product.additionalInformation && product.additionalInformation.length > 0) {
      additionalInformation = 'Additional information: ' + product.additionalInformation.join(', ')
    }
    let price = product.promo > 0 ?
      (+product.price - +product.price * (product.promo / 100)).toFixed(2)
      + ' (' + product.price + ')'
      : product.price
    let user = localStorage.getItem('user')
    let addToFavorites = user ? <button className='App-add-to-favorites-btn' onClick={this.addProductToFavorites}>{this.state.isAdded ? 'Remove from favorites' : 'Add to favorites'}</button> : ''
    let isAdmin = user && JSON.parse(localStorage.getItem('user')).roles[0] === 'Admin'
    let editProduct = isAdmin ? <button className='App-add-to-favorites-btn'><Link className='App-create-link' to={`/edit/${this.props.match.params.productId}`}>Edit product</Link></button> : ''
    return (
      <div>
        {product !== {}
          ? <div>
            <div className='App-body-title'>
              <p>{product.name} details</p>
              {addToFavorites}
              {editProduct}
            </div>
            <div className='App-details'>
              <p>{product.name}</p>
              <p>{price}</p>
              <p>{product.description}</p>
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
            createNotification={this.props.createNotification}
          />
          : ''}
      </div>
    )
  }
}

Details.propTypes = {
  update: PropTypes.func.isRequired,
  createNotification: PropTypes.func.isRequired
}

export default Details

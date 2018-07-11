import * as urls from './urls'

export async function getProductComments(productId) {
  let comments = []
  await fetch(urls.COMMENTS_PRODUCT_URL + productId)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      comments = response
    })
  return comments
}

export async function createComment(comment) {
  let newComment = {}
  await fetch(urls.COMMENTS_PRODUCT_URL, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response)
      newComment = response
    })
  return newComment
}

export async function updateComment(comment) {
  await fetch(urls.UPDATE_COMMENT_URL, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response)
    })
}

export async function deleteComment(commentId) {
  await fetch(urls.DELETE_COMMENT_URL + commentId, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response)
    })
}


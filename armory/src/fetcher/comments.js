import * as urls from './urls'

export async function getProductComments (productId) {
  let comments = []
  await fetch(urls.COMMENTS_PRODUCT_URL + productId)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      comments = response
    })
  return comments
}

export async function createComment (comment) {
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
    })
}

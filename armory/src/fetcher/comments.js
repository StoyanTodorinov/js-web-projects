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

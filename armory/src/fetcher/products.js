import * as urls from './urls'

export async function getProductsByCategoryName (categoryName) {
  let products = []
  await fetch(urls.PRODUCTS_URL + categoryName)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      products = response
    })
  return products
}

export async function getProductById (productId) {
  let product = {}
  await fetch(urls.PRODUCT_GET_BY_ID_URL + productId)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      product = response
    })
  return product
}

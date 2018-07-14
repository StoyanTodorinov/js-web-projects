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

export async function getPromoProducts () {
  let products = []
  await fetch(urls.PRODUCT_PROMO_URL)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      products = response
    })
  return products
}

export async function getNewProducts () {
  let products = []
  await fetch(urls.PRODUCT_NEW_URL)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      products = response
    })
  return products
}

export async function getProductsByArray (array) {
  let products = []
  await fetch(urls.PRODUCT_ARRAY_URL + array)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      products = response
    })
  return products
}

export async function create (product) {
  await fetch(urls.CREATE_PRODUCT_URL, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then()
}

export async function update (product) {
  await fetch(urls.UPDATE_PRODUCT_URL, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then()
}

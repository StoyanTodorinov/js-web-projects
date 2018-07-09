const Product = require('mongoose').model('Product')

async function getAllProductsByCategory (category) {
  let products = await Product.find({categoryName: category})
  return products
}

async function getProductById (productId) {
  let product = await Product.findById(productId)
  return product
}

module.exports = {
  getAllProductsByCategory,
  getProductById
}

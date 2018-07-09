const Product = require('mongoose').model('Product')

async function getAllProductsByCategory (category) {
  let products = await Product.find({ categoryName: category })
  return products
}

async function getProductById (productId) {
  let product = await Product.findById(productId)
  return product
}

async function getPromoProducts () {
  let products = await Product.find({ promo: { $ne: 0 } }).sort('-promo')
  return products
}

async function getNewProducts () {
  let products = await Product.find({}).sort('-date').limit(3)
  return products
}

module.exports = {
  getAllProductsByCategory,
  getProductById,
  getPromoProducts,
  getNewProducts
}

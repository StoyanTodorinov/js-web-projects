const services = require('../services')

module.exports = {
  getAllProductsByCategory: async (req, res) => {
    let category = req.params.categoryName
    res.json(await services.products.getAllProductsByCategory(category))
  },
  getProductById: async (req, res) => {
    let productId = req.params.productId
    res.json(await services.products.getProductById(productId))
  }
}
const services = require('../services')

module.exports = {
  getAllProductsByCategory: async (req, res) => {
    let category = req.params.categoryName
    res.status(200).json(await services.products.getAllProductsByCategory(category))
  },
  getProductById: async (req, res) => {
    let productId = req.params.productId
    res.status(200).json(await services.products.getProductById(productId))
  },
  getPromoProducts: async (req, res) => {
    res.status(200).json(await services.products.getPromoProducts())
  },
  getNewProducts: async (req, res) => {
    res.status(200).json(await services.products.getNewProducts())
  },
  getAllProductsByArrayOfIds: async (req, res) => {
    let array = req.params.array.split(',')
    if (array[0] === '[]') {
      return res.status(200).json([])
    }
    res.status(200).json(await services.products.getAllProductsByArrayOfIds(array))
  },
  createProduct: async (req, res) => {
    let product = req.body
    await services.products.createProduct(product)
    res.status(201).json({ message: 'Product created!' })
  },
  updateProduct: async (req, res) => {
    let product = req.body
    let productId = product._id
    await services.products.updateProduct(productId, product)
    res.status(200).json({ message: 'Product updated!' })
  }
}

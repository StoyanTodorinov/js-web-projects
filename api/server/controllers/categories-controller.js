const services = require('../services')

module.exports = {
  allCategories: async (req, res) => {
    res.json(await services.categories.allCategories())
  },
  create: async (req, res) => {
    let category = req.body
    await services.categories.create(category)
    res.json({ message: 'Category created!' })
  }
}

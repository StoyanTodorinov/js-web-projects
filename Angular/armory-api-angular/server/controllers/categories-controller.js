const services = require('../services')

module.exports = {
  allCategories: async (req, res) => {
    res.status(200).json(await services.categories.allCategories())
  },
  create: async (req, res) => {
    let category = req.body
    try {
      await services.categories.create(category)
    } catch (err) {
     return res.status(409).json(err)
    }
    res.status(201).json({ message: 'Category created!' })
  }
}

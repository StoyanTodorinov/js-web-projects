const services = require('../services')

module.exports = {
    allCategories: async (req, res) => {
        res.json(await services.categories.allCategories())
    }
}
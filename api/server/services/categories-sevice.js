const Category = require('mongoose').model('Category')

async function allCategories () {
    let categories = await Category.find({})
    return categories
}

module.exports = {
    allCategories
}
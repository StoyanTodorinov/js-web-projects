const Category = require('mongoose').model('Category')

async function allCategories () {
  let categories = await Category.find({})
  return categories
}

async function create (category) {
  await Category.create(category)
}

module.exports = {
  allCategories,
  create
}

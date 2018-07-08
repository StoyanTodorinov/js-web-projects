const mongoose = require('mongoose')
const User = require('../models/User')
const Category = require('../models/Category')
const Product = require('../models/Product')

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }

    console.log('MongoDB ready!')

    User.seedAdminUser()
    Category.seedCategories()
    Product.seedProducts()
  })

  db.on('error', err => console.log(`Database error: ${err}`))
}

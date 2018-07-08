const Product = require('mongoose').model('Product')

async function getAllProductsByCategory (category) {
    let products = await Product.find({categoryName: category})
    return products
}

module.exports = {
    getAllProductsByCategory
}
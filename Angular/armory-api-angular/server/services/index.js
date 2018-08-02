const users = require('./users-service')
const categories = require('./categories-sevice')
const products = require('./products-service')
const comments = require('./comments-service')
const tokens = require('./token-service')

module.exports = {
  users,
  categories,
  products,
  comments,
  tokens
}

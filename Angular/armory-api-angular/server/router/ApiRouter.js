const express = require('express')
const controllers = require('../controllers')
const auth = require('../middleware/token-check')

const apiRouter = express.Router()

module.exports = (app) => {
  apiRouter.route('/')
    .get((req, res) => { res.json('Connected to Armory Api!') })

  apiRouter.route('/users/register')
    .post(controllers.users.register)

  apiRouter.route('/users/login')
    .post(controllers.users.login)

  apiRouter.route('/users/logout')
    .post(controllers.users.logout)

  apiRouter.route('/products/new')
    .get(controllers.products.getNewProducts)

  apiRouter.route('/products/promo')
    .get(controllers.products.getPromoProducts)

  apiRouter.use(auth).route('/users')
    .get(controllers.users.allUsers)
    .put(controllers.users.update)

  apiRouter.use(auth).route('/categories')
    .get(controllers.categories.allCategories)
    .post(controllers.categories.create)

  apiRouter.use(auth).route('/comments')
    .post(controllers.comments.createComment)
    .put(controllers.comments.updateComment)

  apiRouter.use(auth).route('/comments/:productId')
    .get(controllers.comments.getCommentsByProductId)

  apiRouter.use(auth).route('/comments/commentId=:commentId')
    .delete(controllers.comments.deleteComment)

  apiRouter.use(auth).route('/products')
    .put(controllers.products.updateProduct)
    .post(controllers.products.createProduct)

  apiRouter.use(auth).route('/products/array=:array')
    .get(controllers.products.getAllProductsByArrayOfIds)

  apiRouter.use(auth).route('/products/category=:categoryName')
    .get(controllers.products.getAllProductsByCategory)

  apiRouter.use(auth).route('/products/product=:productId')
    .get(controllers.products.getProductById)

  apiRouter.route('*')
    .get((req, res) => res.json('Invalid url. Make sure you have written the correct url and try again'))

  app.use('/api', apiRouter)
}

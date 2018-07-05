const express = require('express')
const controllers = require('../controllers')

const apiRouter = express.Router()

module.exports = (app) => {
  apiRouter.route('/')
    .get((req, res) => {
      res.json('Connected to Armory Api!')
    })

  apiRouter.route('/users')
    .get(controllers.users.allUsers)

  apiRouter.route('/users/register')
    .post(controllers.users.register)

  apiRouter.route('/users/login')
    .post(controllers.users.login)

  apiRouter.route('/users/logout')
    .post(controllers.users.logout)

  apiRouter.route('*')
    .get((req, res) => res.json('Invalid url. Make sure you have written the correct url and try again'))

  app.use('/api', apiRouter)
}

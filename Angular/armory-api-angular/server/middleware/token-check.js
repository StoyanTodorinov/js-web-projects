const jwt = require('jsonwebtoken')
const User = require('../models/User')
const secret = require('../config/settings').secret

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Authorization failed' }).end()
  }

  const token = req.headers.authorization.split(' ')[1]

  return jwt.verify(token, secret, (err, decoded) => {
    if (err) { return res.status(401).send({ message: 'Authorization failed' }).end() }

    const userId = decoded.id
    User.findById(userId).then(user => {
      if (!user) {
        return res.status(401).send({ message: 'Authorization failed' }).end()
      }
      req.user = user
      return next()
    })
  })
}

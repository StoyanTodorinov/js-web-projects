const secret = require('../config/settings').secret
const jwt = require('jsonwebtoken')

module.exports = {
  create: (payload) => {
    return jwt.sign(payload, secret, {
      expiresIn: 604800
    });
  }
}
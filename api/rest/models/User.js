const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  salt: String,
  hashedPass: String,
  roles: [String],
  favorites: { type: [String], default: [] }
})

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User

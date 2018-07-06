const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  imgUrl: { type: String, default: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png' },
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
module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length > 0) return

    let salt = encryption.generateSalt()
    let hashedPass = encryption.generateHashedPassword(salt, '123456')

    User.create({
      username: 'Admin username',
      email: 'Admin email',
      name: 'Admin name',
      imgUrl: 'http://www.virtual-administration.com/wp-content/uploads/2016/02/Admin-resized-2.jpg',
      salt: salt,
      hashedPass: hashedPass,
      roles: ['Admin'],
      favorites: []
    })
  })
}

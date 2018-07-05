const User = require('mongoose').model('User')

async function allUsers () {
  let users = await User.find({})
  return users
}

function login (user) {
  return User.findOne({ username: user.username })
}

function register (user, salt, hashedPass) {
  return User.create({
    username: user.username,
    name: user.name,
    email: user.email,
    salt: salt,
    hashedPass: hashedPass
  })
}

module.exports = {
  allUsers,
  login,
  register
}

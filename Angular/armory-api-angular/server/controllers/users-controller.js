const encryption = require('../utilities/encryption')
const services = require('../services')

module.exports = {
  register: (req, res) => {
    let reqUser = req.body
    let jsonUser

    let salt = encryption.generateSalt()
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)

    services.users.register(reqUser, salt, hashedPassword).then(user => {
      jsonUser = user
      req.logIn(user, (err, user) => {
        if (err) {
          return res.status(403).json(err)
        }
        const token = services.tokens.create({ id: jsonUser._id })
        res.status(201).json({ ...jsonUser._doc, token })
      })
    }).catch(err => {
      return res.status(400).json(err)
    })
  },
  login: (req, res) => {
    let reqUser = req.body
    let jsonUser
    services.users.login(reqUser).then(user => {
      if (!user) {
        return res.status(403).json('Invalid username')
      }

      if (!user.authenticate(reqUser.password)) {
        return res.status(403).json('Invalid password')
      }
      jsonUser = user
      req.logIn(user, (err, user) => {
        if (err) {
          return res.status(403).json(err)
        }
        const token = services.tokens.create({ id: jsonUser._id })
        res.status(200).json({ ...jsonUser._doc, token })
      })
    })
  },
  logout: (req, res) => {
    req.logout()
    res.status(200).json()
  },
  allUsers: async (req, res) => {
    res.status(200).json(await services.users.allUsers())
  },
  update: async (req, res) => {
    let newUser = req.body
    await services.users.update(newUser._id, newUser)
    res.status(200).json({ message: 'User updated!' })
  }
}

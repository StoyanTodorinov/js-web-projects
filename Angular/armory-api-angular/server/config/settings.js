const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/armory-api-angular',
    port: 1337
  },
  secret: 'supersecret',
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}

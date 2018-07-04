const express = require('express')
const bodyParser = require('body-parser')

require('./config/database')()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(process.env.PORT || 2000, () => {
  console.log('Server is running')
})

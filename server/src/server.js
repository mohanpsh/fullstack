const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const config = require('../config/config')
const bodyParser = require('body-parser')
const {graphqlExpress} = require('apollo-server-express')
const mongoose = require('mongoose')

const port = config.port
const app = express()

// app modules
const schema = require('./graphql')
const DB = require('./models')

// setting up middleware for the app
app.use(cors())
app.use(morgan('dev'))

// setting up graphql 
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    DB
  }
}))
// connecting to a mongodb database
mongoose.connect(config.mongoURI, () => {
  console.log('connected to database successfully')
})

// starting the server
app.listen(port, () => {
  console.log(`starting grapql serevr on localhost:${port}`)
})

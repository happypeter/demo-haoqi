const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('tiny'))

// ES6 promises
mongoose.Promise = Promise

// mongodb connection
mongoose.connect('mongodb://localhost:27017/sandbox', {
  useMongoClient: true,
  promiseLibrary: global.Promise
})

var db = mongoose.connection

// mongodb error
db.on('error', console.error.bind(console, 'connection error:'))

// mongodb connection open
db.once('open', () => {
  console.log(`Connected to Mongo at: ${new Date()}`)
})

app.use(express.static(path.join(__dirname, 'public')))

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routes = require('./routes')
routes(app)

app.listen(3008, () => {
  console.log('running on port 3008')
})

const express = require('express')
const cors = require('cors')
const app = express()
const apiRouter = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', cors(), apiRouter)

app.listen(3008, () => console.log('running on port 3008...'))

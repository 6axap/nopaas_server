require('dotenv').config()
const sites = require('./routes/site')
const connectToDB = require('./db')

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/sites', sites);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


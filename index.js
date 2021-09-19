require('dotenv').config()
const sites = require('./routes/site')
const connectToDB = require('./db')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/sites', sites);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


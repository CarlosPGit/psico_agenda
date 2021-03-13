const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('dotenv/config')
require('./configs/database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Pagina principal')
})

app.use(require('./routes/user'))

app.listen(process.env.PORT, () => {
  console.log('App is running ' + process.env.PORT)
})

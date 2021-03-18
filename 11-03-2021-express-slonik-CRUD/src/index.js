const express = require('express')

const db = require('../config/db')
const app = express()

const serviceRouter = require("./services")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//app.use('/', require('./services')(db))

app.use("/api", serviceRouter)

app.use((_, __, next) => {
  next(new Error('path not found'))
})


app.use((error, _, res, __) => {
  res.status(400).json({
    status: false,
    message: error.message
  })
})

app.listen(3000, () => {
  console.info('> listening at http://localhost:3000')
})
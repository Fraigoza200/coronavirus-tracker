require('dotenv').config()

const express = require('express')
const { join } = require('path')

const app = express()
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || 8080
app.listen(port)
console.log('server started ' + port)
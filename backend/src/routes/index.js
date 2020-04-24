const express = require('express')

const routes = express.Router()

routes.get('/', function (request, response) {
  return response.status(200).json({ 
    name: 'Node API',
    version: '0.0.1', 
  })
})

module.exports = routes
const express = require('express')
const controller = require('../controllers/user')

const routes = express.Router()

routes.get('/', controller.getUser)
routes.get('/:id', controller.getUserById)
routes.post('/', controller.createUser)
routes.post('/login', controller.authenticate)

module.exports = routes

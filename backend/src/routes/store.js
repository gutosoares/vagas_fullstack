const express = require('express')
const controller = require('../controllers/store')

const routes = express.Router()

routes.get('/', controller.getStores)
routes.get('/:id', controller.getStoreById)
routes.post('/', controller.createStore)
routes.put('/:id', controller.editStore)
routes.delete('/:id', controller.deleteStore)

module.exports = routes

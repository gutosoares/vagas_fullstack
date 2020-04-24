const express = require('express')
const controller = require('../controllers/product')

const routes = express.Router()

routes.get('/', controller.getProducts)
routes.post('/', controller.createProduct)
routes.put('/:id', controller.editProduct)
routes.delete('/:id', controller.deleteProduct)

module.exports = routes

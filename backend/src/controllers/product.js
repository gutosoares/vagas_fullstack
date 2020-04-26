const Product = require('../models/product')

async function getProducts(request, response) {
  const { page = 1, sortBy = 'updated', search = '', limit = 10, descending = false } = request.query

  const query = {}

  if(search !== '') {
    query['name'] = search
  }

  const options = {
    select: 'percentage title price image link store',
    page,
    limit: limit > 30 ? 30 : parseInt(limit),
    sort: {
      name: descending === 'true' ? 'desc' : 'asc',
      'updated_At': sortBy === 'updated' ? 1 : -1
    },
    populate: {
      path: 'store',
      select: '_id name logo link image',
      model: 'Store'
    }
  }

  try {
    const products = await Product.paginate(query, options)
    if(!products) return response.status(400).json({
      message: 'Produtos não encontrados'
    })

    return response.status(200).json({
      data: products
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao buscar os produtos'
    })
  }
}

async function createProduct(request, response) {
  const { store, percentage, title, price, image, link } = request.body

  try {
    const res = await Product.create({
      store,
      percentage,
      title,
      price,
      image,
      link
    })

    return response.status(201).json({
      message: 'Produto cadastrado com sucesso',
      data: res._id
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao cadastrar produto'
    })
  }
}

async function editProduct(request, response) {
  const { id } = request.params
  const { store, percentage, title, price, image, link } = request.body

  try {
    await Product.updateOne(
      { _id: id },
      { $set: { store, percentage, title, price, image, link } },
    )

    return response.status(200).json({
      message: 'Produto atualizado'
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Não foi possível atualizar o produto'
    })
  }
}

async function deleteProduct(request, response) {
  const { id } = request.params

  try {
    await Product.deleteOne({ _id: id })

    return response.status(200).json({
      message: 'Produto deletado'
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Não foi possível deletar o produto'
    })
  }
}

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  deleteProduct
}

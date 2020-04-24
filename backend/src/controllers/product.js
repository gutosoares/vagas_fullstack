const Product = require('../models/product')

async function getProducts(request, response) {
  try {
    const products = await Product.find({})
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
  const { storeid, percentage, title, price, image, link } = request.body

  console.log({ storeid, percentage, title, price, image, link })
  try {
    const res = await Product.create({
      storeid,
      percentage,
      title,
      price,
      image,
      link
    })

    console.log(res)
    return response.status(201).json({
      message: 'Produto cadastrado com sucesso',
      data: res._id
    })
  } catch (error) {
    console.log(error)
    return response.status(400).json({
      message: 'Erro ao cadastrar produto'
    })
  }
}

async function editProduct(request, response) {
  const { id } = request.params
  const { storeid, percentage, title, price, image, link } = request.body

  try {
    await Product.updateOne(
      { _id: id },
      { $set: { storeid, percentage, title, price, image, link } },
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

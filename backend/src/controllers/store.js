const Store = require('../models/store')

async function getStores(request, response) {
  const { page = 1, sortBy = 'updated', search = '', limit = 10, descending = false } = request.query

  const query = {}

  if(search !== '') {
    query['name'] = search
  }

  const options = {
    select: 'name logo link',
    page,
    limit: limit > 30 ? 30 : parseInt(limit),
    sort: {
      name: descending === 'true' ? 'desc' : 'asc',
      'updated_At': sortBy === 'updated' ? 1 : -1
    }
  }

  try {
    const stores = await Store.paginate(query, options)
    if(!stores) return response.status(400).json({
      message: 'Lojas não encontradas'
    })

    return response.status(200).json({
      data: stores
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao buscar as lojas'
    })
  }
}

async function getStoreById(request, response) {
  const { id } = request.params

  try {
    const store = await Store.findOne({ _id: id }, { name: 1, logo: 1, link: 1 })

    if(!store) return response.status(400).json({
      message: 'Loja não encontrada'
    })

    return response.status(200).json({
      data: store
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao buscar a loja'
    })
  }
}

async function createStore(request, response) {
  const { name, logo, link } = request.body

  try {
    const res = await Store.create({
      name,
      logo,
      link
    })

    return response.status(201).json({
      message: 'Loja cadastrada com sucesso',
      data: res._id
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao cadastrar loja'
    })
  }
}

async function editStore(request, response) {
  const { id } = request.params
  const { name, logo, link } = request.body

  try {
    await Store.updateOne(
      { _id: id },
      { $set: { name, logo, link } },
    )

    return response.status(200).json({
      message: 'Loja atualizada'
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Não foi possível atualizar a loja'
    })
  }
}

async function deleteStore(request, response) {
  const { id } = request.params

  try {
    await Store.deleteOne({ _id: id })

    return response.status(200).json({
      message: 'Loja deletada'
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Não foi possível deletar a loja'
    })
  }
}

module.exports = {
  getStores,
  getStoreById,
  createStore,
  editStore,
  deleteStore
}

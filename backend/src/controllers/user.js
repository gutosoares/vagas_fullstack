const User = require('../models/user')
const md5 = require('md5')
const authService = require('../services/auth')

async function getUser (request, response) {
  try {
    const users = await User.find({}, { name: 1, email: 1 })

    if(!users.length) return response.status(400).json({
      data: users,
      message: 'Nenhum usuário cadastrado'
    })

    return response.status(200).json({
      data: users
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao buscar usuários'
    })
  }
}

async function getUserById (request, response) {
  const { id } = request.params

  try {
    const user = await User.findById({ _id: id }, 'name email')

    if(!user) return response.status(400).json({
      data: user,
      message: 'Usuário não encontrado'
    })

    return response.status(200).json({
      data: user
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao buscar usuário'
    })
  }
}

async function createUser (request, response) {
  const { name, email, password } = request.body

  try {
    const res = await User.create({
      name,
      email,
      password: md5(password + global.SALT_KEY)
    })

    return response.status(201).json({
      message: 'Usuário cadastrado com sucesso',
      data: res._id
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao cadastrar usuário'
    })
  }
}

async function authenticate(request, response) {
  const { email, password } = request.body

  try {
    const user = await User.findOne({ email, password: md5(password + global.SALT_KEY) })
    const token = await authService.generateToken({ id: user._id, email, name: user.name })

    if(!user) return response.status(404).json({
      message: 'Usuário ou senha inválidos'
    })

    return response.status(201).json({
      token,
      data: {
        name: user.name,
        email: user.email
      }
  })
  } catch (error) {
    return response.status(400).json({
      message: 'Erro ao cadastrar usuário'
    })
  }
}

module.exports = {
  getUser,
  getUserById,
  createUser,
  authenticate
}

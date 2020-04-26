const getUsers = async ($axios) => {
  const res = await $axios.$get('/users')
  return res
}

const getUserById = async ($axios) => {
  const res = await $axios.$get('/users')
  return res
}

const login = async ($axios, payload) => {
  const res = await $axios.$post('/users/login', payload)
  return res
}

const createUser = async ($axios, payload) => {
  const res = await $axios.$post('/users', payload)
  return res
}

const getStores = async ($axios, { page = 1, limit = 4, descending = false, sortBy = 'updated' } = {}) => {
  const res = await $axios.$get(`/stores?limit=${limit}&page=${page}&descending=${descending}&sortBy=${sortBy}`)
  return res
}

const getProducts = async ($axios, { page = 1, limit = 4 } = {}) => {
  const res = await $axios.$get(`/products?limit=${limit}&page=${page}`)
  return res
}

export {
  getUsers,
  getUserById,
  createUser,
  login,
  getStores,
  getProducts
}

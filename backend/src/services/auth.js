const jwt = require('jsonwebtoken')

function generateToken(data) {
  return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' })
}

async function decodeToken(token) {
  const data = await jwt.verify(token, global.SALT_KEY)
  return data
}

function authorize(request, response, next) {
  const token = request.body.token || request.query.token || request.headers['x-access-token']

  if(!token) return response.status(401).json({ message: 'Acesso restrito' })

  jwt.verify(token, global.SALT_KEY, (error) => {
    if(error) return response.status(401).json({ message: 'Token inválido' })
    next()
  })
}

module.exports = {
  generateToken,
  decodeToken,
  authorize
}

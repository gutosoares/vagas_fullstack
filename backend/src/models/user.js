const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome é orbigatório'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'O email é orbigatório'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'O password é orbigatório'],
    trim: true
  },
})

module.exports = mongoose.model('User', userSchema)

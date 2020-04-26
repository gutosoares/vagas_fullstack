const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const productSchema = new mongoose.Schema({
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store'
  },
  percentage: {
    type: Number,
    required: [true, 'O preço do produto é obrigatório']
  },
  price: {
    type: Number,
    required: [true, 'O preço do produto é obrigatório']
  },
  title: {
    type: String,
    required: [true, 'O título é orbigatório'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Url da image do produto é obrigatório'],
    trim: true
  },
  link: {
    type: String,
    required: [true, 'O link do produto é orbigatório'],
    trim: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema)

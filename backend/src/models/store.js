const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O noma da loja é obrigatório'],
    trim: true
  },
  logo: {
    type: String,
    required: [true, 'O logo da loja é obriatório']
  },
  link: {
    type: String,
    required: [true, 'O link da loja é obriatório']
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

storeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Store', storeSchema)

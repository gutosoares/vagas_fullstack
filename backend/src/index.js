const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./config')

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const storeRoutes = require('./routes/store')

const PORT = process.env.PORT || 5000
const app = express()

mongoose.connect(config.connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/stores', storeRoutes)

app.listen(PORT, () => console.log(`Server run in ${PORT}`))

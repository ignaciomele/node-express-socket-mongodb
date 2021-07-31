const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')


mongoose.connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log('Cannot connected to MongoDB', err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', require('./routes/views/'))
app.use('/api', require('./routes/API/'))

// Conecction
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))

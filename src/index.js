const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Item = require('./models/items')
const config = require('config')


mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log('Cannot connected to MongoDB', err))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.post('/create-item', async (req,res) => {
    console.log(req.body)
    const item = new Item ({
        name: req.body.name,
        price: parseInt(req.body.price)
    })
    try {
        await item.save()
        res.status(301).redirect('/')
    } catch (error) {
        res.status(500).redirect('/error')
    }
})

app.get('/get-item', (req,res) => {
    Item.find().then(result => res.send(result).catch(err => console.log(err)))
})


app.get('/', (req, res) => { 
    const items = [
        { name: 'mobile phone', price: 1000},
        { name: 'book', price: 30},
        { name: 'computer', price: 2000}
    ]
    res.render('index', {items})
})
app.get('/add-item', (req, res) => res.render('add-item'))
app.use('/error', (req, res) => res.render('error'))
app.get('/*', (req, res) => res.redirect('/error'))


// Conecction
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}`))

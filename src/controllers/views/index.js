const Item = require('../../models/items')

exports.renderGetItems = async (req, res) => {
    const items = await Item.find().exec()
    console.log(items)
    res.render('index', { items })
}

exports.renderAddItem = (req, res) => res.render('add-item')

exports.renderError = (req, res) => res.render('error')

exports.renderErrorRedirect = (req, res) => res.redirect('/error')
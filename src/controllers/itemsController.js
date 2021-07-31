const Item = require('../models/items')

exports.createItem = async (req, res) => {
    console.log(req.body)
    const item = new Item({
        name: req.body.name,
        price: parseInt(req.body.price)
    })
    try {
        await item.save()
        res.status(301).redirect('/')
    } catch (error) {
        res.render('error')
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.deleteOne({ _id: req.params.itemId }).exec()
        res.status(200).json(deletedItem)
        console.log(deletedItem)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

}
const express = require('express')
const router = express.Router()

const { createItem, deleteItem } = require('../../controllers/itemsController')

router.post('/createitem', createItem)
router.delete('/deleteitem/:itemId', deleteItem)

module.exports = router
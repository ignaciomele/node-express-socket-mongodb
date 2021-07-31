const express = require('express')
const router = express.Router()
const { renderGetItems, renderAddItem, renderError, renderErrorRedirect } = require('../../controllers/views/')

router.get('/', renderGetItems)
router.get('/add-item', renderAddItem)
router.get('/error', renderError)
router.get('/*', renderErrorRedirect)

module.exports = router
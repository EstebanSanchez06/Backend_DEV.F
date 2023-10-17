const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/products',productsController.getAllProducts )
router.get('/products/:id', productsController.getById)
router.get('/products/sku/:SKU', productsController.getBySKU)
module.exports= router
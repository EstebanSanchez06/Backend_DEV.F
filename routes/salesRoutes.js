const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')

router.get('/sales', salesController.getAllSales)
router.get('/sales/client/:id', salesController.getByClientId)
router.get('/sales/product/:id', salesController.getByProductId)
router.post('/sales', salesController.createSale)
router.get('/sales/:id', salesController.getById)
module.exports =router
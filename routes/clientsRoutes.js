const clientsController = require('../controllers/clientsController')
const express = require('express')
const router = express.Router()

router.get('/clients', clientsController.getAllClients)
router.get('/clients/:id', clientsController.getClientById)
router.get('/clients/city/:city', clientsController.getClientByCity)
router.post('/clients', clientsController.createClient)
module.exports = router
const express = require('express')
const router = express.Router()
const AppController = require('../controllers/app.controller')

router.post('/addMenu', AppController.addMenu)
router.get('/viewMenu', AppController.viewMenu)
router.post('/checkOut', AppController.checkOut)
module.exports = router
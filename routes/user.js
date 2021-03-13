const express = require('express')
const router = express.Router()

const { register } = require('../controllers/user.controller')

// Controllers
router.post('/registrarse', register)

module.exports = router

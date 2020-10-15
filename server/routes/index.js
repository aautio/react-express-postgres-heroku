const express = require('express')
const router = express.Router()

// Public actions such as sign up and login.
router.use(require('./public'))

module.exports = router
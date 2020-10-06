const express = require('express')

const authenticateHandler = require('../models/handlers/authenticate');

const router = express.Router();

router.get('/login', authenticateHandler.getUser);

module.exports = router
const express = require('express')

const authenticateHandler = require('../models/handlers/authenticate');

const router = express.Router();

router.get('/api/login', async (req, res) => {
    const params = req.query;
    const response = await authenticateHandler.isUserCredentialsValid(params.email, params.password);
    res.send(response);
});

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/api/hello', (req, res) => {
  res.json(`${req.path} says hello!`)
})

module.exports = router

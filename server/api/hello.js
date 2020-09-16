const express = require('express')
const router = express.Router()

router.get('/api/hello', (req, res) => {
  res.json(`Bradley is a cool guy`)
})

module.exports = router

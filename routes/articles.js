const express = require('express')
const router = express.Router()


router.get('/new', (req, res) => {
    res.send('articles/new')
})


module.exports = router


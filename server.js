const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.send("Rendering file")
})

app.listen(5000)
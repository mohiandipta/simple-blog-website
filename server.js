const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('articles', articleRouter)

// article objects
const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
},
{
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test description'
}]


app.get('/', function (req, res) {
    res.render('articles/index', { articles: articles })
})

app.listen(5000)
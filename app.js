const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const word = req.query.word
    res.render('index', { word });
});

app.get('/form', (req, res) => {
    res.render('form', { user: false })
})

app.post('/form', (req, res) => {
    const body = req.body
    const user = {
        username: body.username,
        password: body.password
    }
    res.render('form', { user })
})

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)
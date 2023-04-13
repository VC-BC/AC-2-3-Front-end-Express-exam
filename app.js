const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 讓express知道static file要套用的樣式
app.use(express.static('public'))

// route
app.get('/', (req, res) => {
  res.render('index', { pageTitle: '首頁' })
})

app.get('/about', (req, res) => {
  res.render('index', { pageTitle: 'About' })
})

app.get('/portfolio', (req, res) => {
  res.render('index', { pageTitle: 'Portfolio' })
})

app.get('/contact', (req, res) => {
  res.render('index', { pageTitle: 'Contact' })
})


app.get('/:page', (req, res) => {
  const pageTitle = req.params.page
  res.render('index', { pageTitle })
})


// listen
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})


// console.log(req.params) <-WHY印出{}?
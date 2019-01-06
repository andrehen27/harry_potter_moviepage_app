var express = require('express')
var app = express()

var port = process.env.PORT || 3000

app.set('view engine','ejs')

var path = require('path')
app.use(express.static(path.join(__dirname,'public')))

//Router
var routes = require('./routes')

//home
app.get('/', routes.home)

//movie_number
app.get('/harry_potter_chapter/:movie_number?', routes.movie_number)

//error page
app.get('*', routes.error_page)

app.listen(port)
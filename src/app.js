const { urlencoded } = require('express')
const express = require('express')
const morgan= require('morgan')
const path = require('path')
const app = express()
const expressHBS = require('express-handlebars')

app.set('views', path.join(__dirname, "views"))

app.engine('.hbs', expressHBS.create({
    defaultLayout: "main",
    extname: ".hbs",
}).engine)

app.set('view engine', ".hbs")

app.use( morgan('dev') )
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(require('./routes/index') )

app.use(express.static(path.join(__dirname, 'public')))

module.exports= app
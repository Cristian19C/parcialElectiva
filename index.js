const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))


//configuracion para el motor de vistas ejs
app.set('Views', path.join(__dirname, 'Views'))
app.set('view engine', 'ejs')


app.set('PORT',process.env.PORT || 4000)
app.set(express.v)

app.use('/', require('./routes/index'))

app.listen(app.get('PORT'), ()=> console.log(`El servidor ${app.get('PORT')}`))
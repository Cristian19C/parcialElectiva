//enrutamiento
//elemtos necesarios para hacer enrutamiento
const express = require('express')
const fs = require('fs')
const path = require('path');
const router = express.Router()
const {movies} = require('./../resources/movies')
// const router = require('./about')
const filePath = path.join(__dirname, '..', 'resources', 'marvel.json');
// const path = require('path')
router.get('/', (req, res) => res.render('index', {'title': 'Parcial', 'data':movies}))



router.post('/delete',(req,res)=>{
    const {movie_id} = req.body.movie_id
    
    // movies.delete(index,{'movie_id':movie_id})
    // // Leer el contenido actual del archivo JSON
    

  

    res.redirect('/')
})

module.exports = router

const fs = require('fs');

// Lee el contenido del archivo JSON
const jsonContent = fs.readFileSync('resources/marvel.json', 'utf8');

// Convierte el contenido JSON en un objeto JavaScript
const data = JSON.parse(jsonContent);

// Crea una nueva instancia del objeto Map
const movies = new Map(Object.entries(data["Marvel Cinematic Universe"]));


// Itera sobre los datos y agrega cada elemento al objeto Map
for (const key in data) {
  movies.set(parseInt(key), data[key]);
}

// Exporta el objeto Map
module.exports.movies = movies;

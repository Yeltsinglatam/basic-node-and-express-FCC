let express = require('express');
let path = require('path');
let app = express();

console.log("Hola Mundo");


app.use('/public', express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;

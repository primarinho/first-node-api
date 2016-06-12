var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Pokemon = require('./models/pokemon');

var routes = require('./routes/api');

mongoose.connect('mongodb://localhost:27017/pokemons');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/frontend'));

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const Pokemon = mongoose.model('Pokemon');

router.get('/api/pokemons', function (req, res) {
  /* var pokemons = [{
    number: '001'
    ,name: 'Bulbasaur'
    ,types: ['Grass', 'Poison']
  },{
    number: '004'
    ,name: 'Charmander'
    ,types: ['Fire']
  },{
    number: '007'
    ,name: 'Squirtle'
    ,types: ['Water']
  },{
    number: '010'
    ,name: 'Caterpie'
    ,types: ['Bug']
  },{
    number: '013'
    ,name: 'Weedle'
    ,types: ['Bug', 'Poison']
  },{
    number: '016'
    ,name: 'Pidgey'
    ,types: ['Normal', 'Flying']
  }];
  */

  Pokemon.find({}, function (err, pokemons) {
    res.json(pokemons);
  });
});

router.get('/api/pokemons/:pokemon_number', function (req, res) {
  Pokemon.find({number: req.params.pokemon_number}, function (err, pokemons) {
    res.json(pokemons);
  });
});

router.post('/api/pokemons', function (req, res) {
  var pokemon = new Pokemon();
  pokemon.number = req.body.number;
  pokemon.name = req.body.name;
  pokemon.types = req.body.types;

  pokemon.save(function(err) {
    if (!err) { 
      res.json({ message: 'Pokemon successfully created!' });
    } else {
      res.json({ message: 'Pokemon already exists!' });
    }
  });
});

module.exports = router;
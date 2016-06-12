var express = require('express');
var router = express.Router();

router.get('/api/pokemons', function (req, res) {
  var pokemons = [{
    id: '001'
    ,name: 'Bulbasaur'
    ,types: ['Grass', 'Poison']
  },{
    id: '004'
    ,name: 'Charmander'
    ,types: ['Fire']
  },{
    id: '007'
    ,name: 'Squirtle'
    ,types: ['Water']
  },{
    id: '010'
    ,name: 'Caterpie'
    ,types: ['Bug']
  },{
    id: '013'
    ,name: 'Weedle'
    ,types: ['Bug', 'Poison']
  },{
    id: '016'
    ,name: 'Pidgey'
    ,types: ['Normal', 'Flying']
  }];

  res.json(pokemons);
});

router.post('/api/pokemons', function (req, res) {
  res.json(req.body);
});

module.exports = router;
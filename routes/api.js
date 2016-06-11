var express = require('express');
var router = express.Router();

router.get('/api/pokemons', function (req, res) {
  var pokemons = [{
    id: '001'
    ,name: 'Bulbasaur'
    ,type: 'Grass'
  },{
    id: '004'
    ,name: 'Charmander'
    ,type: 'Fire'
  },{
    id: '007'
    ,name: 'Squirtle'
    ,type: 'Water'
  },{
    id: '010'
    ,name: 'Caterpie'
    ,type: 'Bug'
  },{
    id: '013'
    ,name: 'Weedle'
    ,type: 'Bug'
  },{
    id: '016'
    ,name: 'Pidgey'
    ,type: 'Normal'
  }];

  res.json(pokemons);

});

module.exports = router;
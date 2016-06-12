var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PokemonSchema = new Schema({
  number: { type: String, unique: true, required: true, index: true, trim: true }, 
  name: { type: String, unique: true, required: true, index: true, trim: true },
  types: { type: Array, require: true }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
var pokemonApp = angular.module('pokemonApp', ['checklist-model']);

pokemonApp.controller('PokemonListController', function PokemonListController($scope, $http) {

  $scope.types = [
  'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel'
  , 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'
  ];

  $scope.typelist = {
    types: []
  };

  $scope.loadPokemonList = function() {
    $http.get('http://localhost:3000/api/pokemons').
    success(function(data, status, headers, config) {
      $scope.pokemons = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    });
  };

  $scope.loadPokemonList();
  
  $scope.createPokemon = function() {
    $scope.form.pokemon.types = $scope.typelist.types;
    $http.post("http://localhost:3000/api/pokemons", $scope.form.pokemon).
    success(function(data, status) {
      $scope.message = data.message;
    }).
    error(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    });
  };
});
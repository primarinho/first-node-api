var pokemonApp = angular.module('pokemonApp', []);

pokemonApp.controller('PokemonListController', function PokemonListController($scope, $http) {
  $http.get('http://localhost:3000/api/pokemons').
  success(function(data, status, headers, config) {
    $scope.pokemons = data;
  }).
  error(function(data, status, headers, config) {
    console.log(data, status, headers, config);
  });
});
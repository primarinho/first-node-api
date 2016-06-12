var pokemonApp = angular.module('pokemonApp', []);

pokemonApp.controller('PokemonListController', function PokemonListController($scope, $http) {
  $http.get('http://localhost:3000/api/pokemons').
  success(function(data, status, headers, config) {
    $scope.pokemons = data;
  }).
  error(function(data, status, headers, config) {
    console.log(data, status, headers, config);
  });

  $scope.createPokemon = function() {
    var data = $scope.form.pokemon;

    $http.post("http://localhost:3000/api/pokemons", data).success(function(data, status) {
      console.log($scope.data = data.Id);
      console.log($scope.data = data.Name);
      console.log($scope.data = data.Types);
    });
  };
});
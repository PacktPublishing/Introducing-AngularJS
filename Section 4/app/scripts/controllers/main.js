'use strict';

/**
 * @ngdoc function
 * @name moviemaniaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviemaniaApp
 */
angular.module('moviemaniaApp')
  .controller('MainCtrl', function ($scope) {
    var movieList = [{
      title: 'Usual Suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.',
      category: 'Awesome'
    },
    {
      title: 'Star Wars',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      category: 'Epic'
    }];

    $scope.movies = movieList;

    $scope.movie = {
      title: '',
      description: '',
      category: '',
      image: 'http://www.clipartbest.com/cliparts/LTK/dy5/LTKdy59jc.png'
    };

    $scope.validateTitle = function() {
      if($scope.movie.title.length === 0) {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = function() {
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function() {
      if(!$scope.movie.category) {
        window.alert('Please select a category');
      }
    };

    $scope.checkDescription = function() {
      if($scope.movie.description.length === 0) {
        window.alert('Description is required');
      }
    };

    $scope.openForm = function() {
      $scope.closed = false;
    };

    $scope.closeForm = function() {
      $scope.closed = true;
    };

    $scope.isValid = function() {
      return $scope.movie.title && $scope.movie.category && $scope.movie.description;
    };

  });

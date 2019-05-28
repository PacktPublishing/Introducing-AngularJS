'use strict';

angular.module('moviemaniaApp')
  .controller('MovieCtrl', function ($scope, $routeParams, $http) {
    var id = parseInt($routeParams.id, 10);
    var movieList = [{
      id: 23,
      title: 'Usual Suspects',
      searchTerms: 'the usual suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.',
      category: 'Awesome',
      cast: [
        'McManus: Stephen Baldwin',
        'Fenster: Benicio del Toro',
        'Verbal: Kevin Spacey'
      ]
    },
    {
      id: 42,
      title: 'Star Wars',
      searchTerms: 'star wars 1977',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      category: 'Epic',
      cast: [
        'Han Solo: Harrison Ford',
        'Luke Skywalker: Mark Hamill'
      ]
    },
    {
      id: 1,
      title: 'The Lego Movie',
      searchTerms: 'the lego movie',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX214_AL_.jpg',
      description: "An ordinary Lego construction worker, thought to be the prophesied 'Special', is recruited to join a quest to stop an evil tyrant from gluing the Lego universe into eternal stasis.",
      category: 'Awesome',
      cast: [
        'Emmet Brickowoski: Chris Pratt',
        'Lucy: Elizabeth Banks'
      ]
    }];

    for(var index in movieList) {
      var movie = movieList[index];
      if(movie.id === id) {
        $scope.movie = movie;
        $scope.loading = true;
        $http.jsonp('http://api.duckduckgo.com', {
          params: {
            q: $scope.movie.searchTerms,
            format: 'json',
            pretty: 1,
            callback: 'JSON_CALLBACK'
          }
        }).success(function(data) {
          $scope.movie.abstract = data.AbstractText;
          $scope.movie.abstractSource = data.AbstractSource;
        }).error(function(){
          console.log(arguments);
        }).finally(function() {
          $scope.loading = false;
        });
      }
    }
  });

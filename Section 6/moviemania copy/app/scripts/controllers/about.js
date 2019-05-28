'use strict';

/**
 * @ngdoc function
 * @name moviemaniaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviemaniaApp
 */
angular.module('moviemaniaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

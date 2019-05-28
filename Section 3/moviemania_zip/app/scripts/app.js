'use strict';

/**
 * @ngdoc overview
 * @name moviemaniaApp
 * @description
 * # moviemaniaApp
 *
 * Main module of the application.
 */
angular
  .module('moviemaniaApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

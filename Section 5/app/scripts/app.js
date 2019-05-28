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
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movie/:id/:slug', {
        templateUrl: 'views/singlemovie.html',
        controller: 'MovieCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('!');
  });

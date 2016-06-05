'use strict';

/* App Module */

var wortschatzApp = angular.module('wortschatzApp', ['templates', 'ui.bootstrap', 'ngRoute']);

wortschatzApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home/_home.html',
      }).
      when('/lesson', {
        templateUrl: 'lesson/_lesson.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

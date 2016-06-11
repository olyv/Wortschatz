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

wortschatzApp.service('answerCounter',
  function() {
    var counter = 0;
    var correctAnswers = 0;
    var wrongAnswers = 0;

    var getIncrementedCorrectAnswerCounter = function() {
      correctAnswers = correctAnswers + 1;
      return correctAnswers;
    }
    var getIncrementedWrongAnswerCounter = function() {
      wrongAnswers = wrongAnswers + 1;
      return wrongAnswers;
    }
    var getCorectAnswerCounter = function() {
      return correctAnswers;
    }
    var getWrongAnswerCounter = function() {
      return wrongAnswers;
    };
    
    return {
        getCorectAnswerCounter: getCorectAnswerCounter,
        getWrongAnswerCounter: getWrongAnswerCounter,
        getIncrementedWrongAnswerCounter: getIncrementedWrongAnswerCounter,
        getIncrementedCorrectAnswerCounter: getIncrementedCorrectAnswerCounter
    };
});

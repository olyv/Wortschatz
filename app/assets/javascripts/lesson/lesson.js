wortschatzApp.controller('LessonCtrl', ['$scope',  'lessonItems', '$routeParams',
  function($scope, lessonItems) {

    $scope.active = 0;
    $scope.noWrapSlides = false;

    //to make call from factory once
    if (angular.isUndefined($scope.data)) {
      lessonItems.fetch().then(function(data) {
          $scope.data = data;
      });
    }

    $scope.checkAnswerVerb = function(answerVerb) {
      //check if answer for verb is corect
      $scope.answerVerb.correct = ($scope.answerVerb.partizip == $scope.word.partizip) &&
                                  ($scope.answerVerb.auxverb == $scope.word.auxverb)
      //mark word as answered to display it as success or mistake (green or red)
      $scope.answerVerb.answered = true;
    };

    $scope.checkAnswerNoun = function(answerNoun) {
      //check if answer for noun is corect
      $scope.answerNoun.correct = ($scope.answerNoun.plural == $scope.word.plural) &&
                                  ($scope.answerNoun.article == $scope.word.article)

      //mark word as answered to display it as success or mistake (green or red)
      $scope.answerNoun.answered = true;
    };

    $scope.checkAnswerAdjective = function(answerAdjective) {
      //check if answer for noun is corect
      $scope.answerAdjective.correct = ($scope.answerAdjective.translation == $scope.word.translation)

      //mark word as answered to display it as success or mistake (green or red)
      $scope.answerAdjective.answered = true;
    };

    $scope.getInclude = function(type) {
      if (angular.equals(type, "verb")){
        return "lesson/shared/_verb.html";
      }
      if (angular.equals(type, "noun")) {
        return "lesson/shared/_noun.html";
      }
      if (angular.equals(type, "adjective")) {
        return "lesson/shared/_adjective.html";
      }
    };


}]);

wortschatzApp.factory('lessonItems', function($q, $timeout, $http) {
    var LessonItems = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('/new_lesson').then(function(response) {
                    return response.data;
                });
            }, 5);
        }
    };

    return LessonItems
});

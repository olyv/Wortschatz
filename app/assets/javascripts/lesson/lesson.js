wortschatzApp.controller('LessonCtrl', ['$scope', '$uibModal', '$timeout', 'lessonItems', 'answerCounter', '$routeParams',
  function($scope, $uibModal, $timeout, lessonItems, answerCounter) {

    $scope.active = 0;
    $scope.noWrapSlides = false;

    //to make call from factory once
    if (angular.isUndefined($scope.data)) {
      lessonItems.fetch().then(function(data) {
          $scope.data = data;
      });
    }

    $scope.animationsEnabled = true;

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        size: "lg",
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
        correctAnswers: answerCounter.getCorectAnswerCounter(),
        wrongAnswers: answerCounter.getWrongAnswerCounter()
        }
      });
    };

    $scope.checkAnswerVerb = function(answerVerb) {
      //check if answer for verb is corect
      $scope.answerVerb.correct = ($scope.answerVerb.partizip == $scope.word.partizip) &&
                                  ($scope.answerVerb.auxverb == $scope.word.auxverb)

      if ($scope.answerVerb.correct) {
        $scope.counter = answerCounter.getIncrementedCorrectAnswerCounter();
      } else {
        $scope.counter = answerCounter.getIncrementedWrongAnswerCounter();
      }
      //mark word as answered to display it as success or mistake (green or red)
      $scope.answerVerb.answered = true;
    };

    $scope.checkAnswerNoun = function(answerNoun) {
      //check if answer for noun is corect
      $scope.answerNoun.correct = ($scope.answerNoun.plural == $scope.word.plural) &&
                                  ($scope.answerNoun.article == $scope.word.article)

      if ($scope.answerNoun.correct) {
        $scope.counter = answerCounter.getIncrementedCorrectAnswerCounter();
      } else {
        $scope.counter = answerCounter.getIncrementedWrongAnswerCounter();
      }
      //mark word as answered to display it as success or mistake (green or red)
      $scope.answerNoun.answered = true;
    };

    $scope.checkAnswerAdjective = function(answerAdjective) {
      //check if answer for noun is corect
      $scope.answerAdjective.correct = ($scope.answerAdjective.translation == $scope.word.translation)

      if ($scope.answerAdjective.correct) {
        $scope.counter = answerCounter.getIncrementedCorrectAnswerCounter();
      } else {
        $scope.counter = answerCounter.getIncrementedWrongAnswerCounter();
      }
      //mark word as answered to display it as success or mistake (green or red)
      $scope.answerAdjective.answered = true;
    };

    $scope.isLessonCompleted = function() {
        // console.log(answerCounter.getCorectAnswerCounter() + " correct")
        // console.log(answerCounter.getWrongAnswerCounter() + " wrong")
        total = answerCounter.getWrongAnswerCounter() + answerCounter.getCorectAnswerCounter()
        if (total == 9) {
          $timeout(function(){$scope.open()}, 2500);
        }
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

// $uibModalInstance represents a modal window (instance) dependency
wortschatzApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, correctAnswers, wrongAnswers) {

  $scope.correctAnswers = correctAnswers;
  $scope.wrongAnswers = wrongAnswers;

  $scope.ok = function () {
    $uibModalInstance.close();
    window.location.reload();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

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

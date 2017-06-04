'use strict';

/* App Module */

var wortschatzApp = angular.module('wortschatzApp',
                            ['templates', 'ui.bootstrap', 'ngRoute', 'pascalprecht.translate']);

wortschatzApp.value('appLanguage', 'en');

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

wortschatzApp.config(['$translateProvider', function($translateProvider) {

  $translateProvider.useSanitizeValueStrategy('escape');

  $translateProvider.translations('en', translationsEn);
  $translateProvider.translations('ru', translationsRu);
  $translateProvider.translations('ru', translationsPl);
  $translateProvider.fallbackLanguage('en');

  var browserlanguage = $translateProvider.resolveClientLocale();
  $translateProvider.preferredLanguage(browserlanguage);
}]);

var translationsEn = {
  START_NEW_LESSON: "Start New Leson",
  ADD_NEW_WORD: "Add New Word",
  MANAGE_WORDS: "Manage Words",
  VERIFY_BUTTON_TEXT: "Verify",
  YOUR_ANSWER_IS: "Your answer is '{{answer}}'",
  THIS_IS_CORRECT_ANSWER: "This is correct answer!",
  CORRECT_ANSWER_IS: "correct answer ",
  ENTER_TRANSLATION: "Enter translation",
  ENTER_PARTIZIP: "Enter partizip II",
  ENTER_PLURAL: "Enter plural form",
  YOUR_NOUN_ANSWER_IS: "Your answer is '{{article}} {{plural}}'",
  CORRECT_NOUN_ANSWER_IS: "correct answer is '{{article}}' and '{{plural}}'",
  YOUR_VERB_ANSWER_IS: "Your answer is '{{auxverb}} {{partizip}}'",
  CORRECT_VERB_ANSWER_IS: "correct answer is '{{auxverb}}' and '{{partizip}}'"
};

var translationsRu = {
  START_NEW_LESSON: "Начать урок",
  ADD_NEW_WORD: "Добавить слово",
  MANAGE_WORDS: "Редактор слов",
  VERIFY_BUTTON_TEXT: "Проверить",
  YOUR_ANSWER_IS: "Ваш ответ '{{answer}}'",
  THIS_IS_CORRECT_ANSWER: "Это правильный ответ!",
  CORRECT_ANSWER_IS: "правильный ответ '{{answer}}'",
  ENTER_TRANSLATION: "Введите перевод",
  ENTER_PARTIZIP: "Введите partizip II",
  ENTER_PLURAL: "Введите множественное число",
  YOUR_NOUN_ANSWER_IS: "Ваш ответ '{{article}} {{plural}}'",
  CORRECT_NOUN_ANSWER_IS: "правильный ответ '{{article}}' и '{{plural}}'",
  YOUR_VERB_ANSWER_IS: "Ваш ответ '{{auxverb}} {{partizip}}'",
  CORRECT_VERB_ANSWER_IS: "правильный ответ '{{auxverb}}' и '{{partizip}}'"
};

var translationsPl = {
  START_NEW_LESSON: "Rozpocząć ćwiczenie",
  ADD_NEW_WORD: "Dodać słówko",
  MANAGE_WORDS: "Edytować",
  VERIFY_BUTTON_TEXT: "Sprawdzić",
  YOUR_ANSWER_IS: "Twoja odpowiedź '{{answer}}'",
  THIS_IS_CORRECT_ANSWER: "Poprawna odpowiedź!",
  CORRECT_ANSWER_IS: "poprawna odpowiedź '{{answer}}'",
  ENTER_TRANSLATION: "Napisz tłumaczenie",
  ENTER_PARTIZIP: "Napisz Partizip II",
  ENTER_PLURAL: "Napisz liczbę mnogą",
  YOUR_NOUN_ANSWER_IS: "Twoja odpowiedź '{{article}} {{plural}}'",
  CORRECT_NOUN_ANSWER_IS: "poprawna odpowiedź '{{article}}' и '{{plural}}'",
  YOUR_VERB_ANSWER_IS: "Twoja odpowiedź '{{auxverb}} {{partizip}}'",
  CORRECT_VERB_ANSWER_IS: "poprawna odpowiedź '{{auxverb}}' и '{{partizip}}'"
};

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

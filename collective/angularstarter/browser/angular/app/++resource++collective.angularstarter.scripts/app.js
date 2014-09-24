'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'pascalprecht.translate',
    'ngRoute'
  ])
  .config(['$translateProvider', function ($translateProvider) {
    var defaultLanguage = 'en';

    $translateProvider.translations('en', {
      HELLO: 'Hello'
    });
    $translateProvider.translations('it', {
      HELLO: 'Ciao',
    });
    $translateProvider.preferredLanguage(defaultLanguage);
    $translateProvider.determinePreferredLanguage(function () {
      // is navigator language ok or should we consider also the user's lang cookie
      // since we are dealing with plone?
      var navigatorLanguage = navigator.language;

      return navigatorLanguage ? navigatorLanguage : defaultLanguage;
    });
  }])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: '++resource++collective.angularstarter.views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  }]);

'use strict';

describe('Controller: MainCtrl initialization', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
  }));

  it('message should be Plone!', function () {
    expect(scope.message).toBe('Plone!');
  });
});


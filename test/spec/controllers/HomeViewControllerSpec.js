'use strict';

define(['angular', 'angularMocks', 'appModule', 'appRoutes'], function (angular, mocks, appModule, appRoutes) {
    describe('Controller: HomeViewController', function () {

        // load the controller's module
        beforeEach(module('app'));

        var HomeViewController, scope;

        // Initialize the controller and a mock scope
        beforeEach(
            inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            HomeViewController = $controller('HomeViewController', { $scope:scope });
        }));

        it('should attach a page value to scope', function () {
            expect(scope.page.heading).toBe('Welcome');
        });
    });

});
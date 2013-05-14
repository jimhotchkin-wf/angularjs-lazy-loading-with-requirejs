define([
    'angular',
    'angularMocks',
    'appModule',
    'appRoutes'
], function (angular, mocks, app, routes) {
    'use strict';
    
    describe('Controller: HomeViewController', function () {

        // load the controller's module
        beforeEach(mocks.module('app'));

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
'use strict';

define(['angular', 'angularMocks', 'appModule', 'appRoutes'], function (angular, mocks, appModule, appRoutes) {

    describe('Service: getData', function () {

        // load the service's module
        beforeEach(module('app'));

        // instantiate service
        var getData;
        beforeEach(inject(function (_getData_) {
            getData = _getData_;
        }));

        it('should do something', function () {
            expect(!!getData).toBe(true);
        });

    });

});

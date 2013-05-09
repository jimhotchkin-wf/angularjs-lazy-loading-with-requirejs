'use strict';

define(['angular', 'angularMocks', 'appModule', 'appRoutes'], function (angular, mocks, appModule, appRoutes) {

    describe('Service: getTemplate', function () {

      // load the service's module
      beforeEach(module('app'));

      // instantiate service
      var getTemplate;
      beforeEach(inject(function (_getTemplate_) {
        getTemplate = _getTemplate_;
      }));

      it('should do something', function () {
        expect(!!getTemplate).toBe(true);
      });

  });

});

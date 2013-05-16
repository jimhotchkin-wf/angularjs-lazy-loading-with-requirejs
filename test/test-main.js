requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',
    paths: {
        'angular': '/base/app/vendor/angular.min',
        'angularMocks': '/base/test/vendor/angular/angular-mocks'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularMocks' : {deps: ['angular'], 'exports': 'angular.mock'}
    },
    priority: ['angular']
});

require( [
    'angular',
    'angularMocks',
    'appModule',
    'appRoutes',
    '/base/test/unit.js' //list all your unit files here

], function(angular, appModule, appRoutes) {
        window.__karma__.start();
});
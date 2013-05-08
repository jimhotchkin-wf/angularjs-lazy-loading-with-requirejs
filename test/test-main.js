require.config({
    baseUrl:'base/app/scripts',
    map: {
        '*':{
            'vendor/angular':'../vendor/angular.min',
            'vendor/angular-mocks':'../../test/vendor/angular-mocks'
        }
    },
    shim: {
        '../vendor/angular.min' : {
            exports: 'angular'
        },
        '../../test/vendor/angular-mocks' : {
            deps: ['vendor/angular'],
            exports: 'angular.mock'
        }
    }
});

require(
    [
        'vendor/angular',
        'vendor/angular-mocks',
        'appModule',
        'controllers/HomeViewController',
        '../../test/test-tests',
        '../../test/spec/controllers/HomeViewController'
    ],
    function () {
        window.__karma__.start();
    });
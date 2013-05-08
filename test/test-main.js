var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
        'angular': '../vendor/angular.min',
        'angular-mocks': '../../test/vendor/angular-mocks'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-mocks' : {
            deps: ['angular'],
            exports: 'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
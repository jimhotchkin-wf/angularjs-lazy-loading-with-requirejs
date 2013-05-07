define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/views/home.html',
                dependencies: [
                    'controllers/HomeViewController'
                ]
            },
            '/about/:person': {
                templateUrl: '/views/about.html',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            '/contact': {
                templateUrl: '/views/contact.html',
                dependencies: [
                    'controllers/ContactViewController'
                ]
            },
            '/dynaform': {
                templateUrl: '/views/dynaForm.html',
                dependencies: [
                    'directives/wfDatePicker',
                    'directives/wfDynamicField',
                    'directives/wfDynamicForm',
                    'services/getData',
                    'services/getTemplate'
                ]
            }
        }
    };
});
angularjs-lazy-loading-with-requirejs
=====================================
A demonstration of lazy loading in [AngularJS](http://angularjs.org/) using [Asynchronous Module Definitions (AMD)](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition) with [RequireJS](http://requirejs.org/).
This sample application was created to accompany the blog post entitled '[Lazy Loading In AngularJS](http://ify.io/lazy-loading-in-angularjs/)'.

## How it works
Simple specify your routes along with its lazy dependencies in `app/scripts/appRoutes.js` 

## How to run the demo

Either serve the `app` folder of this repo up with your web server or

* Install node.js
* Run `npm install` from within the root project directory to install relevant dependencies
* Run `node server.js` from within the root project directory to start the app

## Running the tests
* Run `npm install -g karma` to install Karma
* Run `karma start` from within the root project directory to start Karma's watcher

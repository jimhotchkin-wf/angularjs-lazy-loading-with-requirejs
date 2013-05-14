angularjs-lazy-loading-with-requirejs
=====================================
A demonstration of lazy loading in [AngularJS](http://angularjs.org/) using [Asynchronous Module Definitions (AMD)](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition) with [RequireJS](http://requirejs.org/).
This sample application was created to accompany the blog post entitled '[Lazy Loading In AngularJS](http://ify.io/lazy-loading-in-angularjs/)'.

## How it works
Simple specify your routes along with its lazy dependencies in `app/scripts/appRoutes.js` 

## Vagrantized For Your Protection
This repo has been fitted with a Vagrant scaffolding, which will install nodejs and any required node modules.

## Installing the app

### Requirements
**VirtualBox:**

* Download and install the latest version of [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

**Vagrant:**

* Download [Vagrant.dmg](http://downloads.vagrantup.com/), open it and install it.

**Virtual Machine Image:**

* Download the [wf_precise64-2.box](https://wapt.webfilings.com/boxes.php?box=wf_precise64-2.box) image
* Assuming your vm image is located at `~/Downloads/wf_precise64-2.box`, run the following command: `vagrant box add wf_precise64-2 ~/Downloads/wf_precise64-2.box`

## Running the app

### Starting the virtual machine

* From within the root folder of this repo, run `vagrant up`
* After the installation scripts complete, enter the virtual machine's shell: `vagrant ssh`
* From within the virtual machine's shell, switch to the project root: `cd /vagrant`

### Running the dev server
* From within the virtual machine's shell, switch to the project root: `cd /vagrant`
* Run `node server.js` from within the root project directory to start the app
* The dev server's port has been forwarded to [http://localhost:3000](http://localhost:3000)

### Running tests
* From within the virtual machine's shell, switch to the project root: `cd /vagrant`
* Run `karma start` from within the root project directory to start Karma's watcher
* The karma server's port has been forwarded to [http://localhost:9876](http://localhost:9876)

----

## Original README
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
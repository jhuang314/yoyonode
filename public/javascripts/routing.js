angular.module('app', [])

// Module loading
// --------------
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	'use strict';

	var DEFAULT_PATH = "/";

	$routeProvider
	
	    .when('/', {

		templateUrl: '/javascripts/tmpl/index.html',
		controller : 'homeCtrl',

	    })

	    .when('/about', {
		templateUrl: '/javascripts/tmpl/about.html',
		controller : 'homeCtrl',
	    })


	    .when('/archives', {

		templateUrl: '/javascripts/tmpl/archives.html',
		controller : 'homeCtrl',

	    })

	    .when('/contact', {

		templateUrl: '/javascripts/tmpl/contact.html',
		controller : 'homeCtrl',

	    })

	    .when('/equiptment', {

		templateUrl: '/javascripts/tmpl/equiptment.html',
		controller : 'homeCtrl',

	    })

	    .when('/events', {

		templateUrl: '/javascripts/tmpl/events.html',
		controller : 'homeCtrl',

	    })

	    .when('/members', {

		templateUrl: '/javascripts/tmpl/members.html',
		controller : 'homeCtrl',

	    })

	    .when('/picture', {

		templateUrl: '/javascripts/tmpl/picture.html',
		controller : 'homeCtrl',

	    })

	    .when('/tutorial', {

		templateUrl: '/javascripts/tmpl/tutorial.html',
		controller : 'homeCtrl',

	    })


	    .when('/home', {

		templateUrl: '/javascripts/tmpl/home.html',
		controller : 'homeCtrl',

	    })
	
	    .when('/404', {
		templateUrl: '/javascripts/tmpl/404.html',
		controller : 'missingPageCtrl',
	    })


	    .otherwise({
		redirectTo : DEFAULT_PATH,
	    });

    }]);

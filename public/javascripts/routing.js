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
	
	    .when('/calendar', {
		
		templateUrl: '/javascripts/tmpl/events.html',
		controller : 'homeCtrl',
		
	    })
	
	    .when('/members', {
		
		templateUrl: '/javascripts/tmpl/members.html',
		controller : 'memberCtrl',
		
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
    }])

    .directive('navTabs', ['$location', function(location) {
	return {
	    restrict: 'A',
	    link: function(scope, element) {
		var $ul = $(element);
		// $ul.addClass("nav nav-tabs");
		
		var $tabs = $ul.children();
		var tabMap = {};
		$tabs.each(function() {
		    var $li = $(this);

		    if ($li.find('a').attr('href')) {
			//Substring 1 to remove the # at the beginning (because location.path() below does not return the #)
			tabMap[$li.find('a').attr('href').substring(1)] = $li;
		    }


		});
		
		scope.location = location;
		scope.$watch('location.path()', function(newPath) {
		    $tabs.removeClass("active");
		    tabMap[newPath].addClass("active");
		});
	    }
	    
	};
	
    }]);

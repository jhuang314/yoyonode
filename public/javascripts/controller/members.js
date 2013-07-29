angular.module('app').controller('memberCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    
    $http.get('/data/members.json').success(function(data) {
    	$scope.members = data;
	$scope.numColumns = 3;
	$scope.rows = [];
	$scope.rows.length = Math.ceil($scope.members.length / $scope.numColumns);
	$scope.cols = [];
	$scope.cols.length = $scope.numColumns;    
    });
    
    $scope.orderProp = 'name';
    
}]);


angular.module('app').controller('memberCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    
    $http.get('/data/members.json').success(function(data) {
    	$scope.members = data;
	$scope.numColumns = 3;
	$scope.current_rows = [];
	$scope.current_rows.length = Math.ceil($scope.members.current.length / $scope.numColumns);
	$scope.current_cols = [];
	$scope.current_cols.length = $scope.numColumns;    

	$scope.past_rows = [];
	$scope.past_rows.length = Math.ceil($scope.members.current.length / $scope.numColumns);
	$scope.past_cols = [];
	$scope.past_cols.length = $scope.numColumns;    
    });
    
    $scope.orderProp = 'name';
    
}]);


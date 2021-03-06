var app = angular.module('app').controller('memberCtrl', ['$scope', '$http', function ($scope, $http) {
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


    $scope.loadMember = function (member) {
	// get the member data when user clicks on thumbnail
	$scope.memberData = member;
    }    
    
    $scope.modalAddWidget = function (){
        $scope.ui = { add_widget_value: '' };
        $scope.showModal = true;
    };
    
    $scope.addWidget = function (){
        $scope.myobject.widgets.push({"name": $scope.ui.add_widget_value});
        $scope.ui.add_widget_value = '';
        $scope.showModal = true;
    };
    
    
    $scope.orderProp = 'name';
    
}]);

app.directive('revealModal', function (){
    return function(scope, elem, attrs) {
        scope.$watch(attrs.revealModal, function(val) {
            if(val) {           
                elem.trigger('reveal:open');
            } else {
                elem.trigger('reveal:close');
            }
        });
        elem.reveal();
    }
});



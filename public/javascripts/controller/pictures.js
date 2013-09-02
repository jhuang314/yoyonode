var app = angular.module('app').controller('pictureCtrl', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    
    $http.get('/data/pictures.json').success(function(data) {
        $scope.pictures = data;
        $scope.numColumns = 3;
        $scope.current_rows = [];
        $scope.current_rows.length = Math.ceil($scope.pictures.current.length / $scope.numColumns);
        $scope.current_cols = [];
        $scope.current_cols.length = $scope.numColumns;    
        
        $scope.past_rows = [];
        $scope.past_rows.length = Math.ceil($scope.pictures.current.length / $scope.numColumns);
        $scope.past_cols = [];
        $scope.past_cols.length = $scope.numColumns;    
    });
    
    
    $scope.loadPicture = function (picture) {
	// get the picture data when user clicks on thumbnail
	$scope.pictureData = picture;
    }    
    
    // $scope.modalAddWidget = function (){
    //     $scope.ui = { add_widget_value: '' };
    //     $scope.showModal = true;
    // };
    
    // $scope.addWidget = function (){
    //     $scope.myobject.widgets.push({"name": $scope.ui.add_widget_value});
    //     $scope.ui.add_widget_value = '';
    //     $scope.showModal = true;
    // };
    
    $scope.getClass = function(path) {
	var cur_path = $location.path().substr(0, path.length);
	if (cur_path == path) {
            if($location.path().substr(0).length > 1 && path.length == 1 )
		return "";
            else
		return "active";
	} else {
            return "";
	}
    }
    
    
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



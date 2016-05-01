app.controller('authorController', ['$scope', '$location', function($scope, $location) {
	$scope.author = {"id":1,"name":"Mario","fisrt_last_name":"Rojas","second_last_name":"Mol\u00edna","initials":"MRM","country_id":null,"created_at":"2016-05-01 20:00:01","updated_at":"2016-05-01 20:00:01"};
	$scope.authorTemp = new Object();
	var a = 1;

	if(a==1){
		$scope.editingMode = false;
		$scope.showSave = false;

		$scope.$watch('authorTemp', function() {
			$scope.temEqual = same = Object.equals($scope.authorTemp, $scope.author);
			if($scope.editingMode && !same){
				$scope.showSave = true;
			}else{
				$scope.showSave = false;
			}
		}, true);

		$scope.save = function() {
			$scope.author = $scope.authorTemp;
			$scope.showSave = false;
		}

		$scope.edit = function() {
			$scope.editingMode = !$scope.editingMode;
			if($scope.editingMode){
				$scope.authorTemp = JSON.parse(JSON.stringify($scope.author));
			}else{

			}
		}
	}
}]);
app.controller('authorsController', ['$scope', '$http', function($scope, $http) {
	$scope.authors = [];
	var a = 1;
	if(a==1){
		loadAuthor($scope.idAuthor);
		$scope.editingMode = false;
		$scope.showSave = false;

		$scope.$watch('authorTemp', function() {
			console.log('$watch')
			changeTemp();
		}, true);

		$scope.save = function() {
			saveChanges();
		}

		$scope.edit = function() {
			editingMode();
		}

		function changeTemp() {
			$scope.temEqual = same = Object.equals($scope.authorTemp, $scope.author);
			if($scope.editingMode && !same){
				$scope.showSave = true;
			}else{
				$scope.showSave = false;
			}
		}

		function saveChanges() {
			$scope.author = JSON.parse(JSON.stringify($scope.authorTemp));
			$scope.author.updated_at = Date.now();
			$scope.showSave = false;
			Materialize.toast('Cambios guardados con exito', 3000);
		}

		function editingMode() {
			if($scope.showSave){
				if(confirm('Desea guradar los cambios')){
					$scope.save();
				}
			}
			$scope.editingMode = !$scope.editingMode;
			$scope.authorTemp = JSON.parse(JSON.stringify($scope.author));
		}

		function loadAuthor() {
			$http.get(CONFIG.WSS + 'author').then(
				function (response,b,c) {
					console.log(response,b,c);
					status = {
						code: 1,
						message: {
							es: 'Lista cargada correctamente',
							en: 'Loading list successfully'
						}
					}
					$scope.authors = response.data;
				},
				function (a,b,c) {
					console.log(a,b,c);
					status = {
						code: 2,
						message: {
							es: 'No se ha podidio cargar la lista',
							en: 'Could not load the list'
						}
					}
					//setList([]);
				}
			);
		}
	}
}]);
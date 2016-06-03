app.controller('authorController', ['$scope', '$routeParams', '$http', 'hotkeys', function($scope, $routeParams, $http, hotkeys) {
	$scope.idAuthor = $routeParams.id;
	$scope.author = {"id":1,"name":"Diego José","fisrt_last_name":"Piedra","second_last_name":"Araya","initials":"DJ Piedra A","country_id":null,"created_at":"2016-05-01 20:00:01","updated_at":"2016-05-01 20:00:01"};
	$scope.author.emails = [
		'diegojopiedra@gmail.com',
		'diego.piedraaraya@ucr.ac.cr',
		'diego.piedra@ucrso.info'
	];
	
	$scope.author.affiliations = [
		'Universidad de Costa Rica',
		'Tecnológico de Costa Rica'
	];
	
	$scope.author.interships = [
		'Mishigan Institut Tecnology'
	];

	$scope.author.country = {"id":"1","name":"Costa Rica","acronym":"CR"};

	$scope.countries = [
		{
			id: '1',
			name: 'Costa Rica',
			acronym: 'CR'
		},
		{
			id: '2',
			name: 'Nicaragua',
			acronym: 'Nic'
		},
		{
			id: '3',
			name: 'Estados Unidos',
			acronym: 'US'
		},
	];

	$scope.authorTemp = new Object();

	$scope.works = new Object;
	$scope.works.finalGraduationProjects = [];
	$scope.works.magazines = [];
	$scope.works.books = [];
	$scope.works.referableThesis = [];

	$scope.propertiesChanging = [];
	var a = 1;


	hotkeys.add({
		combo: 'ctrl+e',
		description: 'Save changes',
		allowIn: ['input', 'html'],
		callback: function() {
			event.preventDefault();
			editingMode();
		}
	});

	hotkeys.add({
		combo: 'ctrl+s',
		description: 'Editig mode',
		allowIn: ['input', 'html'],
		callback: function(event) {
			event.preventDefault();
			console.log('Save')
			if($scope.showSave){
				saveChanges();
			}
		}
	});

	hotkeys.add({
		combo: 'alt+s',
		description: 'Save changes + Editig mode',
		allowIn: ['input', 'html'],
		callback: function(event) {
			event.preventDefault();
			console.log('Save')
			if($scope.showSave){
				saveChanges();
				editingMode();
			}
		}
	});

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

		function loadAuthor(id) {
			$http.get(CONFIG.WSS + 'author/' + id).then(
				function (response,b,c) {
					console.log(response,b,c);
					status = {
						code: 1,
						message: {
							es: 'Lista cargada correctamente',
							en: 'Loading list successfully'
						}
					}
					$scope.author = response.data;
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
app.controller('authorController', ['$scope', '$location', 'hotkeys', function($scope, $location, hotkeys) {
	$scope.author = {"id":1,"name":"Sharon Melissa","fisrt_last_name":"Barrantes","second_last_name":"Mol\u00edna","initials":"SBM","country_id":null,"created_at":"2016-05-01 20:00:01","updated_at":"2016-05-01 20:00:01"};
	$scope.author.emails = [
		'diegojopiedra@gmail.com',
		'diego.piedraaraya@ucr.ac.cr',
		'diego.piedra@ucrso.info'
	];
	$scope.author.country = {"id":"3","name":"Estados Unidos","acronym":"US"};

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


	$scope.collapsibleElements = [{
		icon: 'mdi-image-filter-drama',
		title: 'First',
		content: 'Lorem ipsum dolor sit amet.'
	},{
		icon: 'mdi-maps-place',
		title: 'Second',
		content: 'Lorem ipsum dolor sit amet.'
	},{
		icon: 'mdi-social-whatshot',
		title: 'Third',
		content: 'Lorem ipsum dolor sit amet.'
	}
	];


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
	}
}]);
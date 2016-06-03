app.controller('worksController', ['$scope', 'worksService', '$http', function($scope, worksService, $http) {
	$scope.yearsRank = {
	    start: [2000, 2015],
	    step: 1,
	    connect: true,
	    behaviour: 'tap-drag',
	    range: { 'min': 1995, 'max': 2016 },
	    pips: {
			mode: 'positions',
			values: [0,24,49,73,100],
			density: 5,
			stepped: true
		}
	}

	$scope.delete = function (id) {
		alert(id);
	}

	worksService.observeListUpdate(function () {
		$scope.list = worksService.getList();
		Materialize.toast(worksService.getStatus().message.es, 4000);
	});

		$scope.newWork = {};
		$scope.newWork.title = 'Acoso humano hacia los arboles libres nativos de la Sabana';
		$scope.newWork.signature = 'DS-7156-5810';
		$scope.newWork.methodology = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in egestas erat, id condimentum ante. Nunc vel pharetra libero, ut commodo ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec arcu varius, dictum ligula eu, ultricies risus. Nulla lectus lectus, pretium a ipsum sed, vestibulum congue mi. Ut mi massa, tincidunt maximus ligula quis, dignissim sodales ipsum. Proin tortor nulla, auctor sit amet blandit vel, accumsan ac magna. Vivamus nulla tellus, dignissim eget ipsum sollicitudin, consequat eleifend nulla. Vestibulum ut egestas mauris. Mauris ut posuere purus, sit amet tempus ipsum. Aliquam bibendum lacus eget ex tristique imperdiet. Fusce tincidunt risus odio, et tincidunt nisl consectetur quis. Sed ut imperdiet justo, commodo semper eros. Suspendisse vitae justo aliquet, facilisis sapien fringilla, venenatis ex.";
		$scope.newWork.publication_date = "2016-04-29";

	$scope.submit = function() {
		$http({
		  method: 'POST',
		  url: CONFIG.WSS + 'work',
		  data: $scope.newWork
		}).then(
		function (response,b,c) {
			console.log(response,b,c);
		},
		function (a,b,c) {
			console.log(a,b,c);
		}
	);
	}

}]);

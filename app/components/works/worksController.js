app.controller('worksController', ['$scope', 'worksService', function($scope, worksService) {
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

}]);

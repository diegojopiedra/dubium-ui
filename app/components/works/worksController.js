app.controller('worksController', ['$scope', '$http', function($scope, $http) {
	$scope.yearsRank = {
	    start: [2000, 2015],
	    step: 1,
	    margin: 1,
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
}]);

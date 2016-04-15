app.controller('statisticsController', ['$scope', function ($scope) {
	$scope.labels = [
		'Seminario de Graduación', 
		'Práctica Dirigida', 
		'Proyecto de Graduación', 
		'Tesis'
	];
  	$scope.series = ['Series A'];
  	$scope.colours = ['#ffa726'];

  	$scope.data = [
	    [65, 59, 80, 81]
	];
}]);
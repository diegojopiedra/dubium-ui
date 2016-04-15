app.config(['$routeProvider', function  ($routeProvider) {
	$routeProvider.
		when('/',{
			templateUrl: 'app/components/home/homeView.html'
		})
		.when('/trabajos',{
			templateUrl: 'app/components/works/worksView.html',
        	controller: 'worksController'
		})
		.when('/estadisticas',{
			templateUrl: 'app/components/statistics/statisticsView.html',
        	controller: 'statisticsController'
		})
        .otherwise({
            redirectTo: '/'
        });
}]);
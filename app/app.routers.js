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
		.when('/administracion',{
			templateUrl: 'app/components/dashboard/dashboardView.html',
        	controller: 'dashboardController'
		})
		.when('/administracion/autores',{
			templateUrl: 'app/components/authorsDashboard/authorsDashboardView.html',
        	controller: 'authorsDashboardController'
		})
		.when('/autor/:id',{
			templateUrl: 'app/components/author/authorView.html',
        	controller: 'authorController'
		})
        .otherwise({
            redirectTo: '/'
        });
}]);
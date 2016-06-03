app.service('worksService', ['$http', '$timeout', function ($http, $timeout) {
	var observerCallbacks = [];
	var list = [];
	var status = {
		code: 0,
		message: {
			es: 'Cargado la lista ...',
			en: 'Loading list...'
		}
	}

	$http.get(CONFIG.WSS + 'work').then(
		function (response,b,c) {
			console.log(response,b,c);
			status = {
				code: 1,
				message: {
					es: 'Lista cargada correctamente',
					en: 'Loading list successfully'
				}
			}
			setList(response.data);
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
			setList([]);
		}
	);

  	//register an observer
  	this.observeListUpdate = function(callback){
  		observerCallbacks.push(callback);
  	};

  	//call this when you know 'foo' has been changed
  	var notifyObservers = function(){
  		angular.forEach(observerCallbacks, function(callback){
  			callback();
  		});
  	};
  		
  	function setList (newList) {
  		list = newList;
  		notifyObservers();
  	}

  	this.getList = function () {
  		return list;
  	}

  	this.getStatus = function () {
  		return status;
  	}
}]);
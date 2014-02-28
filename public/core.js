var lucille_weather = angular.module('lucille_weather', []);

function weatherController($scope, $http) {
	$scope.loadWeather = function() {
		$http.get('/api/weather/current')
			.success(function(data) {
				$scope.forecast = data;
			}).error(console.log("Error querying weather"));
	};
};
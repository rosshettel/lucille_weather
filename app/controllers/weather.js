var Forecast = require('forecast');
var forecastConfig = require('../../config/forecast');

var forecast = new Forecast({
	service: 'forecast.io',
	key: forecastConfig.apiKey,
	units: forecastConfig.units,
	cache: true,
	ttl: { minutes: 25 }
});

exports.current = function(req, res) {
	forecast.get(forecastConfig.homeCoords, function(err, weather) {
		if(err) 
			console.dir(err);
		else
			res.send(weather);
	});
};
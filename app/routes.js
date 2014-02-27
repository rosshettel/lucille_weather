var weather = require('./controllers/weather');

module.exports = function(app) {
	app.get('/api/weather/current', weather.current);

}
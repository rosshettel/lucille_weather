var weather = require('./controllers/weather');

module.exports = function(app) {
	app.get('/api/weather/current', weather.current);
	app.get('/weather', function(req, res) {
		res.sendfile('./public/weather.html');
	});
}
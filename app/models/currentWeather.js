module.exports = function(forecast) {
	this.currently = forecast.currently,
	this.nextHour = forecast.minutely.summary,
	this.nextHourIcon = forecast.minutely.icon,
	this.hourlySummary = forecast.hourly.summary,
	this.hourlySummaryIcon = forecast.hourly.icon,
	// // this.evening. = extractEveningForecast(forecast),
	this.daily = forecast.daily,
	this.alerts = forecast.alerts
}
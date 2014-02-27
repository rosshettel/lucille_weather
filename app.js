//set up
var express = require('express');
var app = express();
var port = process.env.port || 8080;

//configuration
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

//models

//routes
require('./app/routes')(app);

//listen
app.listen(port);
console.log("App listening on port " + port);
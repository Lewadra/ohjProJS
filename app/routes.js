var mainController = require('./controllers/mainController');

module.exports = function(app) {
	app.get('/', function(req, res) {
		mainController.getIndexPage(req,res);
	});

	app.get("/kaupungit", function(req, res) {
		mainController.getCities(req, res);
	});

	app.get("/etaisyys/:origin/:destination", function(req, res ){
		mainController.getDistance(req, res);
	});

};


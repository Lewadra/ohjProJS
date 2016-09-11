var mainController = require('./controllers/mainController');

module.exports = function(app) {
	app.get('/', function(req, res) {
		mainController.getIndexPage(req,res);
	});

	app.get("/kaupungit", function(req, res) {
		mainController.getCities(req, res);
	});

	app.get("/naapurit/:id", function(req, res ){
		mainController.getNeighbors(req, res);
	});

};


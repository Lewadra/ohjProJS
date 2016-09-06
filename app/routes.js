var mainController = require('./controllers/mainController');

module.exports = function(app) {
	app.get('/', function(req, res) {
		mainController.getIndexPage(req,res);
	});

	app.get("/testiresti", function(req, res) {
		mainController.testiresti(req, res);
	});
};


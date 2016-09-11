var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var initializeDB = require('./config/initialize');


var port = process.env.PORT || 8080; // set our port
mongoose.connect(require('./config/db').url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection succesfull");
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

initializeDB.init();
require('./app/routes')(app); // pass our application into our routes

app.listen(port);

exports = module.exports = app;

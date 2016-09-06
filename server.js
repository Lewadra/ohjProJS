var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var Cities = require('./app/models/Cities');
var http = require('./app/crawler/crawler');


var port = process.env.PORT || 8080; // set our port
mongoose.connect(require('./config/db').url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection succesfull");
});

var City = new Cities.model({});
City.save();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

/*
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
*/

require('./app/routes')(app); // pass our application into our routes

app.listen(port);

exports = module.exports = app;

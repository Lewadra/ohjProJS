var mongoose       = require('mongoose');
var Cities         = require('../models/Cities');
var dijkstra       = require('../dijkstra');

module.exports = {
      getIndexPage: function(req, res) {
          console.log("sending index page...");
          res.sendfile('./public/index.html');
      },
    getCities: function(req, res) {
        Cities.model.find({}, function(err, result) {
            res.send(result);
        });
    },
    getNeighbors: function(req, res) {
        console.log(req.params.id);
        Cities.model.find({ 'cityName' : req.params.id}, function(err, result) {
            res.send(result);
        });
    },
    getShortestPath: function(req, res) {
        Cities.model.find({}, function(err, result) {
           var distance = String(dijkstra.findShortestPath(result, req.query.startCityName, req.query.endCityName));
           console.log(distance);
           res.send(distance);
        });
       
    }
};
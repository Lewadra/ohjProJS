var mongoose       = require('mongoose');
var Cities         = require('../models/Cities');

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
    getDistance: function(req, res) {
        console.log(req.params.origin);
        console.log(req.params.destination);
        // tähä se dikstra

        res.send("dikstra");
        /*
         Cities.model.find({ 'cityName' : req.params.id}, function(err, result) {
         res.send(result);
         })
         */;
    },
};
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
    cityName: String,
    cityNeighbors: []
});

var Cities = mongoose.model("Cities", citySchema);

module.exports = {
    model: Cities
};

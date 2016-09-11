var mongoose       = require('mongoose');
var Cities         = require('../app/models/Cities');

function init() {
    var cities = [
        {
            cityName: "tampere", cityNeighbors: [
            {turku: 150, vaasa: 240, helsinki: 170}]
        },
        {
            cityName: "vaasa", cityNeighbors: [
            {tampere: 240, oulu: 320, kuopio: 380}]
        },
        {
            cityName: "oulu", cityNeighbors: [
            {vaasa: 320, kuopio: 290, kajaani: 180}]
        },
        {
            cityName: "kajaani", cityNeighbors: [
            {kuopio: 170, oulu: 180, joensuu: 230}]
        },
        {
            cityName: "kuopio", cityNeighbors: [
            {vaasa: 380, oulu: 290, kajaani: 170, joensuu: 130}]
        },
        {
            cityName: "joensuu", cityNeighbors: [
            {kajaani: 230, kuopio: 130, imatra: 200, mikkeli: 210}]
        },
        {
            cityName: "mikkeli", cityNeighbors: [
            {kuopio: 160, joensuu: 210, imatra: 140, helsinki: 230}]
        },
        {
            cityName: "imatra", cityNeighbors: [
            {joensuu: 200, mikkeli: 140, helsinki: 260}]
        },
        {
            cityName: "helsinki", cityNeighbors: [
            {mikkeli: 230, imatra: 260, turku: 160, tampere: 170}]
        },
        {
            cityName: "turku", cityNeighbors: [
            {tampere: 150, helsinki: 160, kuopio: 380}]
        },
        {
            cityName: "vaasa", cityNeighbors: [
            {tampere: 240, oulu: 320, kuopio: 380}]
        }
    ];
    Cities.model.remove({}, function() {
        console.log("collection dropped.");
    });
    Cities.model.collection.insert(cities, function (err, docs) {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Bulk succeeded");
        }
    });
}
module.exports.init = init;




var mongoose       = require('mongoose');
var Cities         = require('../app/models/Cities');

function init() {
    var cities = [
        {
            cityName: "tampere", cityNeighbors: [
            {turku: 150, vaasa: 240, helsinki: 170}], latitude: "61.497752", longitude: "23.760954"
        },
        {
            cityName: "vaasa", cityNeighbors: [
            {tampere: 240, oulu: 320, kuopio: 380}], latitude: "63.095089", longitude: "21.616456"
        },
        {
            cityName: "oulu", cityNeighbors: [
            {vaasa: 320, kuopio: 290, kajaani: 180}], latitude: "65.012089", longitude: "25.465077"
        },
        {
            cityName: "kajaani", cityNeighbors: [
            {kuopio: 170, oulu: 180, joensuu: 230}], latitude: "64.222178", longitude: "27.727850"
        },
        {
            cityName: "kuopio", cityNeighbors: [
            {vaasa: 380, oulu: 290, kajaani: 170, joensuu: 130}], latitude: "62.897970", longitude: "27.678172"
        },
        {
            cityName: "joensuu", cityNeighbors: [
            {kajaani: 230, kuopio: 130, imatra: 200, mikkeli: 210}], latitude: "62.601016", longitude: "29.763572"
        },
        {
            cityName: "mikkeli", cityNeighbors: [
            {kuopio: 160, joensuu: 210, imatra: 140, helsinki: 230}], latitude: "61.688727", longitude: "27.272146"
        },
        {
            cityName: "imatra", cityNeighbors: [
            {joensuu: 200, mikkeli: 140, helsinki: 260}], latitude: "61.171384", longitude: "28.765148"
        },
        {
            cityName: "helsinki", cityNeighbors: [
            {mikkeli: 230, imatra: 260, turku: 160, tampere: 170}], latitude: "60.169856", longitude: "24.938379"
        },
        {
            cityName: "turku", cityNeighbors: [
            {tampere: 150, helsinki: 160}], latitude: "60.451813", longitude: "22.266630"
        },
        {
            cityName: "vaasa", cityNeighbors: [
            {tampere: 240, oulu: 320, kuopio: 380}], latitude: "63.095089", longitude: "21.616456"
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




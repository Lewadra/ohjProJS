var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');
var url = "http://kotiosoite.com/finland_suomi/suomen_kunnat_ja_kaupungit/suomen_kunnat_luettelo.html";


function getApiUrl(origin, destination) {
    return "https://maps.googleapis.com/maps/api/distancematrix/json?origins="+origin+",Suomi&destinations="+destination+",Suomi&mode=car&language=fi-FI&key=AIzaSyBdG2kXj58phgmKO1qpo1GsUd52o85Sa4E";
}

function Crawler(requestObject) {
    this.request = requestObject || "undefined";
};

Crawler.prototype.makeRequest = function(url, element, cb) {
    if(typeof url !== 'string') {
        throw new Error("Url needs to be type of string");
    }
    var self = this;
    this.request.call(self, url, function(error, res, body) {
        cb(res.statusCode, error, body, element);
    });
};

function parseHTML(statusCode, error , body, element) {
    if(!error && statusCode == 200) {
        var $ = cheerio.load(body);
        var res = $(element);
        var cities = [];
        for(var x = 0; x != res.length-1; x++) {
            cities.push(recursion(res[x], {name: "", neighbours: {}}));
        }
    }
}

function parseJSON(err, res, body, cont, target) {
    if(!err && res.statusCode == 200) {
        var parsed = JSON.parse(body);
        this.cont.neighbours[this.target] = parsed.rows[0].elements[0].distance.value;
    }
}

function recursion(object, result) {
    if(typeof object.children === 'undefined') {
        if (typeof object.data !== 'undefined' && object.next === null) {
            object.data=  object.data.replace(/ä/g, "a");
            object.data=  object.data.replace(/ö/g, "o");
            if(result.name === "" ) {
                result.name = object.data;
            } else {
                if(object.data && object.data.trim()) {
                    request(getApiUrl(result.name, object.data), parseJSON.bind({cont: result, target: object.data}));
                }
            }
        }
    } else {
        for (var i = 0; i < object.children.length; i++) {
            if(object.type === 'tag')
                recursion(object.children[i], result);
        }
    }
}

var element = "pre > p";
var crawler = new Crawler(request);
crawler.makeRequest(url, element, parseHTML);

module.exports.request = request;

// api-key: AIzaSyBdG2kXj58phgmKO1qpo1GsUd52o85Sa4E
// https://maps.googleapis.com/maps/api/distancematrix/json?origins=Tampere&destinations=Helsinki&mode=car&language=en-FR&key=AIzaSyBdG2kXj58phgmKO1qpo1GsUd52o85Sa4E
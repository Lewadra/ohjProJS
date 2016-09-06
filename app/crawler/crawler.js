var request = require("request");
var cheerio = require("cheerio");
var url = "http://kotiosoite.com/finland_suomi/suomen_kunnat_ja_kaupungit/suomen_kunnat_luettelo.html";

function Crawler(requestObject) {
    this.request = requestObject || 'undefined';
};

Crawler.prototype.parse = function(body, element) {
    console.log("parsing the shit");
    var $ = cheerio.load(body);
    var res = $("pre > p > b > a").text();
    console.log(res);
};


Crawler.prototype.makeRequest = function(url, element, cb) {
    if(typeof url !== 'string') {
        throw new Error("Url needs to be type of string");
    }
    var self = this;
    this.request.call(self, url, function(error, res, body) {
        if(!error && res.statusCode == 200) {
            self.parse(body, element);
        }
    });
};

var element = "pre > p > b > a";
var crawler = new Crawler(request, element);
crawler.makeRequest(url);

/*

 a: {
 b:        4,
 c:        3,
 e:        7,
 distance: 9999,
 visited:  false
 },

 */


// api-key: AIzaSyBdG2kXj58phgmKO1qpo1GsUd52o85Sa4E
// https://maps.googleapis.com/maps/api/distancematrix/json?origins=Tampere&destinations=Helsinki&mode=car&language=en-FR&key=AIzaSyBdG2kXj58phgmKO1qpo1GsUd52o85Sa4E
module.exports.request = request;
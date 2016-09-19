app.service('CityService', function($http) {

    function performHttpGet(url, successCb, errorCb) {
        $http.get(url).success(successCb).error(errorCb);
    }

    this.getCities = function(url, sCb, eCb) {
        performHttpGet(url, sCb, eCb);
    }

    this.getShortestPath = function (url, sCity, eCity, sCb, eCb){
      $http.get(url, 
                { params: {
                  "startCityName": sCity,
                  "endCityName": eCity}})
                  .success(sCb)
                  .error(eCb);
    }
});

 /* $http({
            method: 'POST',
            url: '/dijkstra',
            data: {
                cityArray: cities,
                startCity: start,
                endCity: end
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .success(function (data, status, headers, config) {
            console.log("Success");
        })
        .error(function (data, status, header, config) {
            console.log("Fail");
        });*/
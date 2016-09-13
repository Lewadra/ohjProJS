app.service('CityService', function($http) {

    function performHttpGet(url, successCb, errorCb) {
        $http.get(url).success(successCb).error(errorCb);
    }

    this.getCities = function(url, sCb, eCb) {
        performHttpGet(url, sCb, eCb);
    };

});
app.service('CityService', function($http) {

    function performHttpGet(url, successCb, errorCb) {
        $http.get(url).success(successCb).error(errorCb);
    }

    function performHttpPost(url, data, successCb, errorCb) {
        $http.post(url, data).success(successCb).error(errorCb);
    };

    this.getCities = function(url, sCb, eCb) {
        performHttpGet(url, sCb, eCb);
    };

    this.getDistance = function(url, sCb, eCb) {
        performHttpGet(url, sCb, eCb);
    };

    this.postDistanceParameters = function(url, data, sCb, eCb) {
        performHttpPost(url, data, sCb, eCb);
    }


});
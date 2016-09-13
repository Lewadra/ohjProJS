app.directive('mapPoints', function () {
    return {
        restrict: 'EAC',
        scope: {
            cities: '='
        },
        link: function (scope, element, attrs) {
            function findCity(name) {
                for (var j = 0; j < scope.cities.length; j++) {
                    if (scope.cities[j].cityName === name) {
                        return j;
                    }
                }
            }

            scope.$watch('cities', function(n, o) {
                if(typeof scope.cities !== 'undefined') {
                    var canvas = angular.element(element[0]);
                    var ctx = canvas[0].getContext('2d');

                    for(var i = 0; i < scope.cities.length; i++) {
                        ctx.beginPath();
                        ctx.arc(scope.cities[i].longitude, scope.cities[i].latitude, 10, 0,2*Math.PI);
                        ctx.stroke();
                        ctx.font="15px Georgia";
                        ctx.fillText(scope.cities[i].cityName,scope.cities[i].longitude, scope.cities[i].latitude);
                        for(var prop in scope.cities[i].cityNeighbors[0]) {
                            ctx.beginPath();
                            ctx.moveTo(scope.cities[i].longitude , scope.cities[i].latitude);
                            ctx.lineTo(scope.cities[findCity(prop)].longitude, scope.cities[findCity(prop)].latitude);
                            ctx.stroke();
                        }
                    }
                }
            });
        }
    };
});

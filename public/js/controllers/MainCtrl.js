app.controller('MainController', function($scope, $http, CityService) {
	var radius = 10;
	var toggle = false;
	CityService.getCities('/kaupungit', function(resp) {
		if(resp.length != 0) {
			$scope.cities = resp;
			var factor = 40;
			for(var i = 0; i < $scope.cities.length; i++) {
				$scope.cities[i].longitude = resp[i].longitude * factor - 550;
				$scope.cities[i].latitude = -Math.abs(resp[i].latitude) * factor + 2750;
			}
		}
	}, function(error) {
		$scope.cities = {};
	});

	$scope.onMapClick = function(e) {
		toggle = !toggle;
		for(var i = 0; i < $scope.cities.length; i++) {
			var originAngle = Math.atan($scope.cities[i].latitude /$scope.cities[i].longitude );
			var pointAngle = Math.atan(e.offsetY / e.offsetX);
			var remainder = Math.abs(originAngle-pointAngle);
			var origin = Math.sqrt(Math.pow($scope.cities[i].latitude, 2) + Math.pow($scope.cities[i].longitude, 2));
			var pointClicked = Math.sqrt(Math.pow(e.offsetX,2) + Math.pow(e.offsetY, 2));
			var length = Math.sqrt(Math.pow(origin, 2) + Math.pow(pointClicked, 2) - 2 * origin * pointClicked*Math.cos(remainder));
			if(length <= radius) {
				$scope.origin = toggle ? $scope.cities[i].cityName : $scope.origin;
				$scope.destination = !toggle ? $scope.cities[i].cityName : "";
				if (!toggle){
					console.log("S: " + $scope.origin + " D: " + $scope.destination + "Cities: " + $scope.cities);
					CityService.getShortestPath('/dijkstra', $scope.origin, $scope.destination, function(resp) {
						if(resp.length != 0) {
							$scope.distance = resp;
						}
						}, function(error) {
							$scope.distance = "Error";
							console.log(error);
						});
				}
				return;
			}
		}



	};

});

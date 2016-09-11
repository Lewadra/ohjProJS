angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$http({method: 'GET', url: '/kaupungit'}).then(function(res){
		console.log(res.data);  // tuolta löytyy kaikki
	});

	$http({method: 'GET', url: '/naapurit/tampere'}).then(function(res){
		console.log(res.data);
	});

});
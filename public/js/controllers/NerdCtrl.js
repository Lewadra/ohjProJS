angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$http({method: 'GET', url: '/testiresti'}).then(function(res){
		console.log(res);
	});
});
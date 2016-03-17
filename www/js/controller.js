define('controller', ['app'], function(app) {
	app.controller('indexCtrl',['$log', '$scope', function($log, $scope) {
		console.log(222);
		$scope.name = 'ctyloading';
	}]);
});　
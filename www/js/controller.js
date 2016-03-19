define('controller', ['app'], function(app) {
	app.controller('indexCtrl',['$log', '$scope', 'HOST', function($log, $scope, HOST) {
		$scope.taskList = [
			{
				name : '任务一',
				href : HOST + '/task_1.html',
				date : '15/03/2016'
			},
			{
				name : '任务二',
				href : HOST + '/task_2.html',
				date : '18/03/2016'
			}
		];
	}]);
});
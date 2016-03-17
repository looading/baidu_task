define('app', function() {
	var app = angular.module('myApp',[
			'ngRoute'
		]);

	app.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
		var partials = 'partials/';
		var pages = {
			index : partials + 'index.html'
		}
		$routeProvider
			.when('/', {
				templateUrl : pages.index,
				controller : 'indexCtrl'
			})
			.otherwise({ redirectTo : '/' });

		// post get 数据设置
		$httpProvider.defaults.transformRequest = function(obj){  
		              var str = [];  
		              for(var p in obj){  
		                      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
		              }  
		              return str.join("&");  
		            };
		          
		$httpProvider.defaults.headers.post = {  
		         'Content-Type': 'application/x-www-form-urlencoded'  
		};
	}]);

	// app.constant('HOST', 'http://115.28.169.229');
	app.constant('HOST', '');

	return app;
});
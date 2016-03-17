/* 登录验证 */
// var Vali_name = function(dom) {
// };
// Vali_name.prototype = {
// 	check : function(dom) {
// 		var msg = {
// 			err : true,
// 			code : -1
// 		}
// 		if(dom.value.length <= 6) {
// 			msg.err = false;
// 			msg.code = 0;
// 		}
// 		return msg;
// 	}
// };

// var Vali_pass = function() {
// };

// Vali_pass.prototype = {
// 	check : function(dom) {
// 		var msg = {
// 			err : true,
// 			code : -1
// 		}
// 		var Reg = /[A-Za-z0-9_]{6,}/g;
// 		if(dom.value.length <= 6) {
// 			msg.err = false;
// 			msg.code = 0;
// 		}
// 		if(!Reg.test(dom.value)){
// 			msg.err = false;
// 			msg.code = 1;
// 		}
// 		return msg;
// 	}
// };

// var Validate = function (type) {
// 		switch(type) {
// 			case 'username' :
// 				return new Vali_name();
// 				break;
// 			case 'password' :
// 				console.log(3);
// 				return new Vali_pass();
// 				break;
// 			default: 
// 				return false;
// 				break;
// 		}
		
// }


// window.onload = function() {
// 	var username = Validate('username');
// 	var password = Validate('password');

// 	document.querySelector('.submit').onclick = function() {
		
// 		if(!username.check(document.querySelector('.username')).err){
// 			alert(username.check(document.querySelector('.username')).code);
// 		}
// 		if(!password.check(document.querySelector('.password')).err){
// 			alert(password.check(document.querySelector('.password')).code);
// 		}
// 	};
// }
// 
// 

// 数组排序 
// function sort_arr(arr) {
// 	var newArr = new Array();
// 	for (var i = 0; i < arr.length; i++) {
// 		newArr.push(arr[i]);
// 	}
// 	return newArr.sort(function(x,y){return x-y;});
// }
// 

// 数组去重
// function unique(arr){
// 	var tmp = new Array();
// 	for (var i = 0; i < arr.length; i++) {
// 		if(tmp.indexOf(arr[i]) === -1){
// 			tmp.push(arr[i]);
// 		}
// 	}
// 	return tmp;
// }


// function getNthFibonacci(count) {
//   	if(count == 0 || count == 1){
// 	  return 1;
// 	}
// 	var sum1 = 1,
//    		sum2 = 1;
// 	for(var i = 2; i <= count; i++){
// 	    sum3 = sum1 + sum2;
// 	    sum1 = sum2;    
// 	    sum2 = sum3;
// 	}
// 	return sum3;
// }
requirejs.config({
	baseUrl : '../',
	paths :{
		app : 'js/app',
		controller : 'js/controller'
	}
});
requirejs(['app', 'controller'], function(app, controller){
	angular.bootstrap(document, ['myApp']);
});
/*
*
* app.js
*
* Description:
*
*
* Author: Josh Fernandes
*
* Created: Oct 10, 2017
*
* Updated:
*
*
*/
app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.controller('MainCtrl',[function(){
  var self=this;
  self.greeting = "hello there";
}]);

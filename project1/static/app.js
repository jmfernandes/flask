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
app = angular.module('mainApp', []);

app.controller('MainCtrl',[function(){
  var self=this;
  self.greeting = "hello there";
}]);

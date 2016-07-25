var angular = require('angular');
//var route = require('angular-route');
var uiRouter = require('angular-ui-router');
var angularui = require('angular-ui-bootstrap');
var routerConfig = require('./router');
var homeCtrl = require('./controllers/home');
var aboutCtrl = require('./controllers/about');
var loginCtrl = require('./controllers/login');


var myApp = angular.module('myApp' , [uiRouter , angularui]);
myApp.config(routerConfig);
myApp.controller('homeCtrl',  ['$scope', '$http' , homeCtrl]);
myApp.controller('aboutCtrl',  aboutCtrl);
myApp.controller('loginCtrl' , loginCtrl);
module.exports = myApp;
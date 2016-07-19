var angular = require('angular');
var route = require('angular-route');
var angularui = require('angular-ui-bootstrap');
var homeCtrl = require('./controllers/home');
var aboutCtrl = require('./controllers/about');

var myApp = angular.module('myApp' , [route , angularui]);
myApp.config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider
      .when('/home', {
        template: require('./views/home.html'),
        controller: homeCtrl,
        controllerAs:'home'
      })
      .when('/about', {
        template:  require('./views/about.html'),
        controller:  aboutCtrl,
        controllerAs:'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
    }]);
myApp.controller('homeCtrl',  ['$scope' , homeCtrl]);
myApp.controller('aboutCtrl',  aboutCtrl);
module.exports = myApp;

var angular = require('angular');
var route = require('angular-route');
var homeCtrl = require('./controllers/home');
var aboutCtrl = require('./controllers/about');

var myApp = angular.module('myApp' , [route]);
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
myApp.controller('homeCtrl',  homeCtrl);
myApp.controller('aboutCtrl',  aboutCtrl);
module.exports = myApp;

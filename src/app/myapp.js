var angular = require('angular');
//var route = require('angular-route');
var uiRouter = require('angular-ui-router');
var angularui = require('angular-ui-bootstrap');
var homeCtrl = require('./controllers/home');
var aboutCtrl = require('./controllers/about');
var loginCtrl = require('./controllers/login');

var myApp = angular.module('myApp' , [uiRouter , angularui]);
myApp.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.home', {
        url:'/home',
        template: require('./views/home.html'),
        controller: homeCtrl,
        controllerAs:'home'
      })
      .state('main.about', {
        url:'/about',
        template:  require('./views/about.html'),
        controller:  aboutCtrl,
        controllerAs:'about'
      })
      .state('main', {
        url:'/main',
        template:  require('./views/main.html')
      })
      .state('login', {
        url:'/login',
        template:  require('./views/login.html'),
        controller:  loginCtrl,
        controllerAs:'login'
      })
      $urlRouterProvider.otherwise("/login");
    }]);
myApp.controller('homeCtrl',  ['$scope', '$http' , homeCtrl]);
myApp.controller('aboutCtrl',  aboutCtrl);
myApp.controller('loginCtrl' , loginCtrl);
module.exports = myApp;

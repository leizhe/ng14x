//require('./hello1.js');
//require('./styles/style.css');
// var ng = require('angular');
// var ngrouter = require('angular-ui-router');
// var homeCtrl = require('./controllers/home.js')
// var helloApp = ng.module('helloApp' ,[ngrouter]);
//
// helloApp.config(function($routeProvider){
// $routeProvider
//       .when('/', {
//         templateUrl: 'views/home.html',
//         controller: "HomeCtrl",
//         controllerAs: 'home'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
// });
require('./styles/style.css');
//require('angular');
require('./myapp.js');
require('./controllers/home.js');
require('./controllers/about.js');
// var angular = require('angular');
// var myApp = angular.module('myApp' , []);
// myApp.controller('HomeCtrl',['$scope' , function ($scope) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//     $scope.hello = "Hello world";
//
//     console.log('This is Home controller');
//   }]);

//require('./controllers/home.js')(myApp);
//
// module.exports = myApp;

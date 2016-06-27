// var ng = require('angular');
var myApp = require('./../myapp.js')

var homeCtrl = myApp.controller('HomeCtrl',['$scope' , function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hello = "Home controller";

    console.log('This is Home controller');
  }]);

module.exports = homeCtrl;

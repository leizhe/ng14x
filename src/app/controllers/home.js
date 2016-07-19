// var ng = require('angular');
//var myApp = require('./../myapp.js')

// var homeCtrl = function(){
//   myApp.controller('HomeCtrl',['$scope' , ]);
// };
var homeCtrl = function ($scope) {
  var home = this;

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $(function() {
  	var a = $('.row').children();
    console.log(a);
  });

  home.hello= "Home controller";
  $scope.hello = "Home Controller by $scope";
  console.log('This is Home controller');
}

module.exports = homeCtrl;

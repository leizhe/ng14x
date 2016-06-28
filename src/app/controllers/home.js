// var ng = require('angular');
var myApp = require('./../myapp.js')

// var homeCtrl = function(){
//   myApp.controller('HomeCtrl',['$scope' , ]);
// };
var homeCtrl = function () {
  var home = this;

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  home.hello= "Home controller";

  console.log('This is Home controller');
}

module.exports = homeCtrl;

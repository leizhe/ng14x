// var ng = require('angular');
//var myApp = require('./../myapp.js')

// var homeCtrl = function(){
//   myApp.controller('HomeCtrl',['$scope' , ]);
// };

//var Spinner = require('spin');
var Spinner = require('spin.js');
var homeCtrl = function ($scope , $http) {
  var home = this;

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  // $http.post('http://localhost:8649/api/services/app/user/CreateUser',{name:'liuziyuan' , address:'dalian'})
  //   .success(function(data) {
  //     console.log(data);
  //   });

  $(function () {
    var a = $('.row').children();
    console.log(a);
  });

  home.hello = "Home controller";
  $scope.hello = "Home Controller by $scope";
  console.log('This is Home controller');
  var opts = {
    lines: 13 // The number of lines to draw
    , length: 28 // The length of each line
    , width: 14 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#000' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
  }
  var target = document.getElementById("spin");
  new Spinner(opts).spin(target);
}

module.exports = homeCtrl;

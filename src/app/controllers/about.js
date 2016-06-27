var myApp = require('./../myapp.js')

var aboutCtrl = myApp.controller('AboutCtrl',['$scope' , function ($scope) {

    $scope.hello = "About controller";

    console.log('This is About controller');
  }]);

module.exports = aboutCtrl;

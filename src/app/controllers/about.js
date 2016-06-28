var myApp = require('./../myapp.js')
//
// var aboutCtrl = function(){myApp.controller('AboutCtrl',['$scope' , ]);
// };

var aboutCtrl = function ($scope) {
    var about = this;
    about.hello = "About controller";

    console.log('This is About controller');
  };

module.exports = aboutCtrl;

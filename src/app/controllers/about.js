//
// var aboutCtrl = function(){myApp.controller('AboutCtrl',['$scope' , ]);
// };

var aboutCtrl = function () {
    var about = this;
    about.hello = "About controller";

    console.log('This is About controller');
  };

module.exports = aboutCtrl;

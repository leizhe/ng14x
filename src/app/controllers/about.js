//
// var aboutCtrl = function(){myApp.controller('AboutCtrl',['$scope' , ]);
// };

var aboutCtrl = function ($scope,$http) {
    var about = this;
    about.hello = "About controller";
    $scope.hello2 =" Scope Hello";

    $http.post('http://localhost:8649/api/services/app/user/GetUsers' , { name:'liuziyuan'})
      .success(function (data) {
        console.log(data);
      });

    // $http.post('http://localhost:8649/api/services/app/user/GetAllUsers')
    // .success(function(data) {
    //   console.log(data);
    // });

    // $http.post('http://localhost:8649/api/services/app/user/CreateUser',{name:'liuziyuan' , address:'dalian'})
    // .success(function(data) {
    //   console.log(data);
    // });
    console.log('This is About controller');
  };
aboutCtrl.$inject = ['$scope','$http'];
module.exports = aboutCtrl;

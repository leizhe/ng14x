var loginCtrl = function ($scope,$http,$state) {
    var login = this;

    login.username = "123";
    login.password = "123";
    login.login = function() {
        // todo
        $state.go('main');

    }
    // $http.post('http://localhost:8649/api/services/app/user/GetUsers' , { name:'liuziyuan'})
    //   .success(function (data) {
    //     console.log(data);
    //   });

    // $http.post('http://localhost:8649/api/services/app/user/GetAllUsers')
    // .success(function(data) {
    //   console.log(data);
    // });

    // $http.post('http://localhost:8649/api/services/app/user/CreateUser',{name:'liuziyuan' , address:'dalian'})
    // .success(function(data) {
    //   console.log(data);
    // });
    console.log('This is Login controller');
  };
loginCtrl.$inject = ['$scope','$http' ,'$state' ];
module.exports = loginCtrl;

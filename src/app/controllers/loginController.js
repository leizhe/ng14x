var loginCtrl = function ($scope,$http,$state) {
    var login = this;

    login.username = "123";
    login.password = "123";
    login.login = function() {
        // todo
        $state.go('main');

    }
    
    console.log('This is Login controller');
  };
loginCtrl.$inject = ['$scope','$http' ,'$state' ];
module.exports = loginCtrl;

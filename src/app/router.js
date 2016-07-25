var uiRouter = require('angular-ui-router');
var homeCtrl = require('./controllers/home');
var aboutCtrl = require('./controllers/about');
var loginCtrl = require('./controllers/login');

var routerConfig =  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.home', {
        url:'/home',
        template: require('./views/home.html'),
        controller: homeCtrl,
        controllerAs:'home'
      })
      .state('main.about', {
        url:'/about',
        template:  require('./views/about.html'),
        controller:  aboutCtrl,
        controllerAs:'about'
      })
      .state('main', {
        url:'/main',
        template:  require('./views/main.html')
      })
      .state('login', {
        url:'/login',
        template:  require('./views/login.html'),
        controller:  loginCtrl,
        controllerAs:'login'
      })
      $urlRouterProvider.otherwise("/login");
    };
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = routerConfig;
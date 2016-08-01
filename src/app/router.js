var routerConfig =  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.home', {
        url:'/home',
        template: require('./views/home.html'),
        controller: require('./controllers/homeController'),
        controllerAs:'home'
      })
      .state('main.about', {
        url:'/about',
        template:  require('./views/about.html'),
        controller:  require('./controllers/aboutController'),
        controllerAs:'about'
      })
      .state('main.chart', {
        url:'/chart',
        template:  require('./views/chart.html'),
        controller:  require('./controllers/chartController'),
        controllerAs:'chart'
      })
      .state('main', {
        url:'/main',
        template:  require('./views/main.html')
      })
      .state('login', {
        url:'/login',
        template:  require('./views/login.html'),
        controller:  require('./controllers/loginController'),
        controllerAs:'login'
      })
      $urlRouterProvider.otherwise("/login");
    };
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = routerConfig;
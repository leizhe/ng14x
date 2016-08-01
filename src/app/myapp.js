var angular = require('angular');
var uiRouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
var routerConfig = require('./router');
var homeCtrl = require('./controllers/homeController');
var aboutCtrl = require('./controllers/aboutController');
var loginCtrl = require('./controllers/loginController');


var myApp = angular.module('myApp' , [uiRouter , uiBootstrap]);
myApp.config(routerConfig);
module.exports = myApp;
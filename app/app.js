'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'firebase', 'ngDialog']);

app.config(function($urlRouterProvider) {
  $urlRouterProvider.when('/', '/index')
})

app.config(function($locationProvider) {
  $locationProvider.html5Mode({enabled:true, requireBase:false})
})

app.config(function($stateProvider) {
  $stateProvider.state('index', {
    url: '/index',
    templateUrl: '/templates/projectsList.html',
    controller: 'index',
    resolve: {
      
    }
  })
})
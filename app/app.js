'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'firebase']);

app.config(function($urlRouterProvider) {
  $urlRouterProvider.when('/', '/index')
})

app.config(function($locationProvider) {
  $locationProvider.html5Mode({enabled:true, requireBase:false})
})

app.config(function($stateProvider) {
  $stateProvider.state('index', {
    url: '/index',
    templateUrl: '/templates/sample.html',
    controller: 'index'
    // ,
    // resolve: {
      
    // }
  })
})


app.controller('index', function ($scope, $rootScope, $firebaseAuth, $firebaseArray, $firebaseObject) {

})



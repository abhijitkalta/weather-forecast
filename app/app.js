'use strict';
var weatherApp = angular.module('weatherApp',['ngResource','ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/home',
    {
        templateUrl:'/app/home/home.html',
        controller : 'homeController' 
    });
    $routeProvider.when('/forecast',
    {
        templateUrl:'/app/forecast/forecast.html',
        controller : 'forecastController' 
    });
    $routeProvider.otherwise({redirectTo : '/home'});
});
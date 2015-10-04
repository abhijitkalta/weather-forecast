'use strict';

weatherApp.controller('forecastController', ['$scope', 'weatherData','cityData', function($scope, weatherData, cityData) {
 
    $scope.cityName = cityData.city;
    var promise = weatherData.getWeather($scope.cityName);
    promise.then(function(event) {
    $scope.temperature = event.main.temp - 273.5 ;
    }, function(event) {
        console.log(event);
        alert("Failed");
    });
   
    

    
}]);
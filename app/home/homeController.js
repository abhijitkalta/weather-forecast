'use strict';

weatherApp.controller('homeController', ['$scope','cityData',function($scope, cityData) {
 
    $scope.cityName = cityData.city;
    $scope.$watch('cityName',function(){
        
        cityData.city = $scope.cityName;
    
    });
  
}]);
'use strict';

weatherApp.factory('weatherData', function($resource, $q) {
    var resource = $resource('http://api.openweathermap.org/data/2.5/weather?q=:id',{id:'@id'});
    return {
      getWeather  : function(cityName) { 
        var deferred = $q.defer();
        resource.get({id: cityName}).
        $promise.then( function(response) {
        deferred.resolve(response);
        }, function(response) {
        deferred.reject(response);
       });
       return deferred.promise;  
    }
}

});


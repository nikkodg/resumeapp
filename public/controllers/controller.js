var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
   
$http.get('/resumeapp').then(function(response){
    console.log("I got the data I requested");
    
});   
    
}]);

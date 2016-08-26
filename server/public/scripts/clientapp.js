var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/buffy', {
      templateUrl: '/views/buffy.html',
      controller: "buffyController"
    })
    .when('/katniss', {
      templateUrl: '/views/katniss.html',
      controller: "katnissController"
    })
    .when('/lyra', {
      templateUrl: '/views/lyra.html',
      controller: "lyraController"
    })
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .otherwise({
      redirectTo: '/home'
    })
}]);

myApp.controller('buffyController', ['$scope', function($scope) {
  console.log('Buffy controller running');
  $scope.message = "Buffy Summers is the Chosen One";
}]);

myApp.controller('katnissController', ['$scope', function($scope) {
  console.log('Katniss controller running');
  $scope.message = "Katniss Everdeen";
}]);

myApp.controller('lyraController', ['$scope', function($scope) {
  console.log('Lyra controller running');
  $scope.message = "Lyra Belacqua";
}]);

myApp.controller('HomeController', ['$scope', function($scope) {
  console.log('home controller running');
  $scope.message = "Choose Your Hero";
}]);

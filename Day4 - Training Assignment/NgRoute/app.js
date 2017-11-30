var sampleApp = angular.module('sampleApp', ["ngRoute"]);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'views/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'views/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);
  
  sampleApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});


sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});
/*var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .otherwise({
    	redirectTo: '/dashboard'
    });
    .when("/products", {
        templateUrl :"views/login.html",// "views/products.html",
        controller : "loginController"//"productController"
    })
    .when("/registration", {
    	templateUrl : "views/registration.html",
        controller : "registrationController"
    })
     .when("/dashboard", {
        templateUrl : "views/dashboard.html",
        controller : "dashboardController"	
    })
     .when("/login", {
        templateUrl : "views/login.html",
        controller : "loginController"
    })
     
});*/
 // var app = angular.module('productCtrl', ['ui.bootstrap']);
var app = angular.module('myApp', ['ui.router','ui.bootstrap']);

app.config(function ($stateProvider,$urlRouterProvider) {
//	$urlRouterProvider.otherwise('/dashboard');
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller : "loginController"
    })
	    .state('products', {
	        url: '/products',
	        templateUrl: 'views/login.html',
	       // params:      {'name': null},
	        controller : "loginController"
	    })
	    .state('parts', {
	        url: '/parts',
	        templateUrl: 'views/login.html',
	       // params:      {'name': null},
	        controller : "loginController"
	    })
	     .state('productParts', {
	        url: '/productParts',
	        templateUrl: 'views/products.html',
	        params:      {'name': null},
	        controller : "productCtrl"
	    })
	    .state('dashboard', {
	        url: '/dashboard',
	        templateUrl: 'views/dashboard.html',
	        params:      {'name': null},
	        controller : "dashboardController"	
	    })  
	    .state('extend-warranty', {
	        url: '/extend-warranty',
	        templateUrl: 'views/extend-warranty.html',
	        controller : "extendWarrantyController"	
	    })  
	    .state('registration', {
	        url: '/warranty-registration',
	        templateUrl: 'views/registration.html',
	       // controller : "extendWarrantyController"	
	    })  
    })

app.run(function ($state) {
    $state.go('dashboard');
});

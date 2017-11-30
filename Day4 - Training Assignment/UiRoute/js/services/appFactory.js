var app = angular.module("myApp");
app.factory("myfactory", function($http){
	 return {
		 getAllUsers: function(){
			 return $http.get("js/app/serviceData.json");
			 
		 }
	 } 
	
	});
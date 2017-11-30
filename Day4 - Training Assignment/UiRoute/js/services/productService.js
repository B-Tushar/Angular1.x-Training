app.factory('getProductService', ['$http', '$q',function($http, $q){
	 return {
		 getProductdata: function(page){
	            return $http.get('http://localhost:8080/WM/products/'+page)
	            .then(
	            		function(response){
	            			console.log("service of prod "+response.data);
	                        return response.data;
	                    }, 
	                    function(errResponse){
	                        console.error('Error while loading products');
	                        return $q.reject(errResponse);
	                    }
	                    
	            );
	        }
	 };
	
		
		
}]);
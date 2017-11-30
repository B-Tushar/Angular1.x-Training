
app.controller("tableController", function($scope, myfactory){
	//userRepository.getAllUsers().success(function(users) {$scope.users = users});
	myfactory.getAllUsers().then(function(response) {
	    if(response.status == '200'){
	    	$scope.users = response.data;
	    	console.log(JSON.stringify($scope.users));
	    }
	  }, function(error) {
		  console.log(error);
	  });
	
	
});
app.controller("loginController", function($scope,$state) {
//console.log('loginController=>',$state.current.name);
	
	$scope.loginSubmit = function() {
		console.log("in contr");
		//Below logic to highlights products or parts tab 
	
		//$state.go('productParts',{'name': $state.current.name});
		$state.go('productParts',{'name': $state.current.name});
	};
});

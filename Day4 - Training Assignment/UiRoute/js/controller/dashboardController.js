app.controller("dashboardController", function($scope,$stateParams) {
	
		console.log("in dashboardController");
		console.log('received parameter =>',$stateParams.name)
		
		 $scope.myInterval = 3000;
		  $scope.slides = [
		    {
		      image: 'images/john-deere-tractor-01.jpg'
		    },
		    {
		      image: 'images/john-deere-tractor-02.jpg'
		    },
		    {
		      image: 'images/john-deere-tractor-03.jpg'
		    },
		    {
		      image: 'images/john-deere-tractor-04.jpg'
		    },
		    {
			  image: 'images/john-deere-tractor-05.jpg'
			}
		  ];
});

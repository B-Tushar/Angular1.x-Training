app.controller("productCtrl", [ '$scope', '$modal', '$log', '$stateParams',
		'getProductService',
		function($scope, $modal, $log, $stateParams, getProductService) {

			$scope.tabs = [ {
				title : 'Product',
				url : 'one.tpl.html'
			}, {
				title : 'Parts',
				url : 'two.tpl.html'
			} ];
			if ($stateParams.name == 'products')
				$scope.currentTab = 'one.tpl.html';
			else
				$scope.currentTab = 'two.tpl.html';

			$scope.onClickTab = function(tab) {
				$scope.currentTab = tab.url;
				if (tab.title == 'Product')
					$scope.getproducts(0);
				else
					console.log("In parts tab section")
			}

			$scope.isActiveTab = function(tabUrl) {
				return tabUrl == $scope.currentTab;
			}

			$scope.prddetails = [];
			$scope.getproducts = function(page) {
				
				getProductService.getProductdata(page).then(function(resp) {
					$scope.prddetails = resp;
					return $scope.prddetails;
				});

			}
			
			$scope.getproducts(0);
			// $scope.prddetails = [ {
			// ProductName : "Dell",
			// ProductModel : "NAC502",
			// ProductType : "Electonics",
			// ProductStatus : "Available",
			// ProductCost : "300$",
			// }, {
			// ProductName : "Acer",
			// ProductModel : "NBS201",
			// ProductType : "Electonics",
			// ProductStatus : "Available",
			// ProductCost : "500$",
			// } ];

			$scope.partdetails = [ {
				ParttName : "GFDF",
				ProductModel : "fergrg",
				ProductType : "Electonics",
				PartStatus : "Available",
				ParttCost : "300$",
			}, {
				ParttName : "FRDF",
				ProductModel : "gerger",
				ProductType : "Electonics",
				PartStatus : "Available",
				ParttCost : "500$",
			} ];

			$scope.showForm = function(userForm) {
				$scope.message = "Show Form Button Clicked";
				console.log($scope.message);

				var modalInstance = $modal.open({
					templateUrl : 'modal-form.html',
					controller : ModalInstanceCtrl,
					scope : $scope,
					resolve : {
						userForm : function() {
							return userForm;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {
					$scope.selected = selectedItem;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			$scope.showFormPart = function(userForm) {
				$scope.message = "Show Form Button Clicked";
				console.log($scope.message);

				var modalInstance = $modal.open({
					templateUrl : 'modal-part.html',
					controller : ModalInstancePartCtrl,
					scope : $scope,
					resolve : {
						userForm : function() {
							return userForm;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {
					$scope.selected = selectedItem;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			}
		} ]);

var ModalInstanceCtrl = function($scope, $modalInstance, userForm) {
	console.log(userForm);
	$scope.userForm = userForm;

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};

var ModalInstancePartCtrl = function($scope, $modalInstance, userForm) {
	console.log(userForm);
	$scope.userForm = userForm;

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};
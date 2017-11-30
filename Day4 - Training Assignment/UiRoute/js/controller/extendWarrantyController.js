app.controller('extendWarrantyController', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Full',
            url: 'one.tpl.html'
        }, {
            title: 'Custom',
            url: 'two.tpl.html'
        }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $scope.checkboxModel = {
    value1 : false,
    value2 : false,
    };


}]);
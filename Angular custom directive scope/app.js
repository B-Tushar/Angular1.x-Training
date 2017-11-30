var app = angular.module('myapp',[])
app.controller('mycontroller',function($scope){
  $scope.message = "Hello World"
    $scope.user1= "Jakob1",
    $scope.user2= "Jakob2",
     $scope.user3= "Jakob3",
     //$scope.user4= "",
    $scope.flavor= "orange"
    $scope.action = function(){
           alert("called")
    }
})

app.directive('myDirectiveTrue',function(){
 //We can access data from parent controller but it can't reflects directive changes to parent controller
  return{
    restrict:'EA',
    scope:true,
    template:"<input type='text' ng-model='user1'> <br/> "
  }

})

app.directive('myDirectiveFalse',function(){
  //We can access data from parent controller also it reflects directive changes to parent controller
  return{
    restrict:'EA',
    scope:false,
    template:"<input type='text' ng-model='user2'> <br/> "
  }

})

app.directive('myDirectiveIsolated',function(){
  //We cannot access parent controller data also cannot reflects directive data to parent controller.
  return{
    restrict:'EA',
    scope:{
      userName:'=name',
      flavor:'@',
      click:'&bymethod'
    },
    template:"<input type='text' ng-model='user3'> <br/><button ng-click='click()'>Method Binding</button><br/><div>{{user3}}</div><div>{{flavor}}</div>"
  }
})
define(['angular'],function(){
	var app = angular.module('myApp', []);
    app.controller('DemoController', function ($scope) {
        $scope.hello  = 'world';
		$scope.data = [1,2,3,4,5,6,7];
		$scope.name = [1,2,3,4];
    });
    
    app.controller('navController',function ($scope){
    	$scope.nav = [{title:'个人信息',url:'userInfo.html'},{title:'发布商品',url:'postTrade.html'},{title:'我的订单',url:'userPlatform.html'}];
    	$scope.xx = ".nav-none";
    	$scope.mouse = function(){
    		$scope.home =  ".nav-none";
    	}
    });
    angular.bootstrap(document,['myApp']);
});
define(['jquery','bootstrap','angular'],function () {
	
    var app = angular.module('myApp', []);

    app.controller('DemoController', function ($scope) {
        $scope.hello  = 'world';
		$scope.data = [1,2,3,4,5,6,7,8];
		$scope.name = [1,2,3,4];
    });
    angular.bootstrap(document,['myApp']);
    return app;
})
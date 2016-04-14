define(['jquery','bootstrap','angular','spinner'],function () {
	var content = '<div class="row">'+
			'<div class="col-lg-4">'+
				'<a href="#">株洲</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">湘潭</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">上海</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">广州</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">北京</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">重庆</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">黑龙江</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">内蒙古</a>'+
			'</div>'+
			'<div class="col-lg-4">'+
			'	<a href="#">上海</a>'+
			'</div>'+
		'</div>';
	$('#city').popover({
		html:true,
		content:content
	});
	
	var app = angular.module('myApp', []);
    app.controller('showController', function ($scope) {
        $scope.hello  = 'world';
		$scope.data = [1,2,3,4,5,6,7,8];
		$scope.name = [1,2,3,4];
		
    });
    angular.bootstrap(document,['myApp']);
});

function chooseSize(obj){
	var childrens = $('#size').children();
	for(i=1;i<childrens.length;i++){
		$(childrens[i]).children().removeClass("div-choose");
	}
	$(obj).addClass("div-choose");
}

function chooseColor(obj){
	var childrens = $('#color').children();
	for(i=1;i<childrens.length;i++){
		$(childrens[i]).children().removeClass("div-choose");
	}
	$(obj).addClass("div-choose");
}
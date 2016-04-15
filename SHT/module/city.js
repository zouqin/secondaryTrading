define(['jquery','bootstrap','angular','spinner','etalage','require'],function () {
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
	
	$('#etalage').etalage({
		thumb_image_width: 450,
		thumb_image_height: 300,
		source_image_width: 900,
		source_image_height: 1200,
		show_hint: true,
		click_callback: function(image_anchor, instance_id){
			
		}
	});
	
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

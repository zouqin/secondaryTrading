require.config({
	paths:{
		jquery:"jquery.min",
		bootstrap:"bootstrap.min",
		less:'less-1.7.3.min',
		angular:'angular.min',
		uiRouter:'http://cdn.bootcss.com/angular-ui-router/1.0.0-alpha0/angular-ui-router.min.js',
		spinner:'jquery.spinner.min',
		etalage:'jquery.etalage.min'
	},
	shim:{
		bootstrap:{
			deps:['jquery'],
			exports:'bootstrap'
		},
		less:{
			exports:'less-1.7.3.min'
		},
		angular:{
			exports:'angular.min'
		},
		spinner:{
			deps:['jquery','bootstrap']
		},
		etalage:{
			deps:['jquery']
		}
	}
})

require(['less'],function(){});



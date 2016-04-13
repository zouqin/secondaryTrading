require.config({
	paths:{
		jquery:"jquery.min",
		bootstrap:"bootstrap.min",
		less:'less-1.7.3.min',
		angular:'angular.min',
		uiRouter:'http://cdn.bootcss.com/angular-ui-router/1.0.0-alpha0/angular-ui-router.min.js',
		app:'../module/app'
	},
	shim:{
		bootstrap:{
			deps:['jquery'],
			exports:'bootstrap'
		},
		less:{
			exports:'less-1.7.3.min'
		},
		angularJS:{
			exports:'angular.min'
		},
        'app': {
            deps: ['angular']
        }
	}
})

require(['app','bootstrap','less','jquery'],function(){
	angular.bootstrap(document,['myApp']);
});



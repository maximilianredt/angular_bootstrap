'use strict';

angular.module('app.main', ['ui.router', 'oc.lazyLoad'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('main', {
		templateUrl: 'app/layout/base.html'
	})
	.state('main.index', {
		url: '/index',
		templateUrl: 'app/main/tpl/index.html',
		controller: 'AppMainIndexCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('app/main/ctrl/index.js');
			}]
		}
	});
});
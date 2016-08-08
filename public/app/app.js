'use strict';

angular.module('angular_bootstrap', [
	'ui.router',
	'oc.lazyLoad',
	'pascalprecht.translate',
	'app.main'
]).
config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
})

.config(['$translateProvider', function ($translateProvider, $http) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'app/i18n/',
		suffix: '.json'
	});

	$translateProvider.preferredLanguage('en');
}]);
'use strict';

angular.module('app.main').factory('Foo', function($http) {
	var functions = {};
	functions.getAll = function() {
		return $http({
			method: 'GET',
			url: '/sample/foo.json'
		});
	};
	return functions;
});
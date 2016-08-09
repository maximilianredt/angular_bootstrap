'use strict';

angular.module('app.main').controller('AppMainIndexCtrl', function($scope, Foo) {
	Foo.getAll().then(function(response) {
		$scope.foo = response.data;
	}, function() {
		console.log('Failed loading data.');
	});

	$scope.clickButton = function(id) {
		alert('Clicked Button on Element with id: ' + id);
	}
});
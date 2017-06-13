var app = angular.module('topTenLastFm',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.topTenTracks = {};
	$scope.topTenArtists = {};
	$scope.search = {
		'key': ''
	};
	$scope.showItemsAs = {
		'list': true,
		'mosaic': false
	};
	$scope.navTopTen = {
		'tracks': false,
		'artists': false
	}
	$scope.apiKey = "1ea476011a970d4658b7ae3a85170d36";

	$scope.mainNav = 'includes/main-nav.html';
	$scope.chartNav = 'includes/chart-nav.html';
	$scope.mainLayout = 'includes/main-layout.html';

	$scope.updateMenuStatus = function (activating, itemsMenu){
		for (view in itemsMenu){
			itemsMenu[view] = false;
		}
		itemsMenu[activating] = true;
	}

}]);
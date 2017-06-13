app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			redirectTo: '/topTenTracks'
		})
		.when('/topTenTracks', {
			templateUrl: 'view/top-ten-tracks.html',
			controller: 'topTenTracksCtrl'
		})
		.when('/topTenArtists', {
			templateUrl: 'view/top-ten-artists.html',
			controller: 'topTenArtistsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});
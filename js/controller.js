app.controller('topTenTracksCtrl', ['$scope', '$http', function($scope, $http){

	$scope.updateMenuStatus('tracks',$scope.navTopTen);
	$http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key='+$scope.apiKey+'&format=json')
		.success(function(data){
			$scope.topTenTracks = data.tracks.track;
		});

}]);

app.controller('topTenArtistsCtrl', ['$scope', '$http', function($scope, $http){

	$scope.updateMenuStatus('artists',$scope.navTopTen);
	$http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key='+$scope.apiKey+'&format=json')
		.success(function(data){
			$scope.topTenArtists = data.artists.artist;
		});

}]);
app
.controller('NewPlaylistCtrl', function($scope, PlaylistFactory, $state) {
    $scope.create = function(songName) {
        PlaylistFactory.create(songName)
        	.then(function(playlist) {
		        $scope.playlist.name = "";
		        $scope.playlistForm.$setPristine(true);
		        $state.go('Playlist', { id : playlist._id});         		
        	})
    };
})
.controller('PlaylistCtrl', function($scope, playlist, PlayerFactory, SongFactory, PlaylistFactory) {

	$scope.playlist = playlist; 

	$scope.isCurrent = function (song) {
		return PlayerFactory.getCurrentSong() === song; 
	}

	$scope.start = function(song) {
		PlayerFactory.start(song, $scope.playlist.songs); 
	}

	SongFactory.fetchAll()
		.then(function(songs) {
			$scope.songs = songs; 
		})


	$scope.addSong = function(song) {
		console.log($scope.playlist); 
		PlaylistFactory.addSong(playlist._id, song)
			.then(function(song) {
				$scope.playlist.songs.push(song); 
				console.log($scope.playlistForm); 
		        // $scope.playlist.name = "";
		        $scope.playlistForm.$setPristine(true);
			})
		
	}

})
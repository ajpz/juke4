app.controller('PlaylistMenuCtrl', function($scope, PlaylistFactory) {
    
    PlaylistFactory.fetchAll()
        .then(function(playlists) {
        	$scope.playlists = playlists; 
        });
        
});
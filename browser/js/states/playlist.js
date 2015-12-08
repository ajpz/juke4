app.config(function($stateProvider) {
    $stateProvider
    .state('newPlaylist', {
        url : "/playlists/new",
        templateUrl : "/templates/playlist-form.html",
        controller : "NewPlaylistCtrl"
    })
    .state('Playlist', {
    	url: "/playlists/:id", 
    	templateUrl: "/templates/playlist.html", 
    	controller: "PlaylistCtrl",
    	// this page will only load after this resolve function has executed,
    	// and resolved -- prevents {{}} from showing up in page render.  
    	// resolve will 'resolve' the promise returned by the function
    	resolve: { 
    		playlist : function(PlaylistFactory, $stateParams) {
	    		return PlaylistFactory.fetchOne($stateParams.id);
	    	} 
	    }
    })
});
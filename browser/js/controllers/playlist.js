app.controller('PlaylistCtrl', function($scope, PlaylistFactory) {
    $scope.create = function(songName) {
        PlaylistFactory.create(songName);
        $scope.playlist.name = "";
        $scope.playlistForm.$setPristine(true);

    };
});
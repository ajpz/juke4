app.controller('PlaylistMenuCtrl', function($scope, PlaylistFactory) {
    PlaylistFactory.fetchAll()
        .then(res => $scope.playlists = res);
});
app.factory('PlaylistFactory', function($http) {

    var cachedPlaylists = [];

    function create(songName) {
        return $http.post('/api/playlists', {
                name: songName
            })
            .then(res => {
                var playlist = res.data;
                cachedPlaylists.push(playlist);
                return playlist;
            });
    };

   function fetchAll() {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    return {
        create: create,
        fetchAll : fetchAll
    }
});

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

    function fetchOne(id) {
        return $http.get('/api/playlists/' + id.toString())
        .then(res => res.data); 
    } 

    function addSong(playlistId, song) {
        console.log('this is the song', song); 
        return $http.post('/api/playlists/' + playlistId + '/songs', {song : song})
            .then(res => res.data)
    }

    return {
        create: create,
        fetchAll : fetchAll,
        fetchOne : fetchOne, 
        addSong: addSong
    }
});

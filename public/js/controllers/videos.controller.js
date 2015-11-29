'use strict';

angular.module('youtubeVideos').controller('VideosController', ['$scope', '$location' , 'youtubeSearch',
 function($scope, $location, youtubeSearch) {
	var vm = this;
  vm.playlists = [];
  vm.playlist = {};

  /** 
    Todo(bianca): refactor the way we call the Youtube API
    At the moment, we send a query to the youtube search service
    to adapt to our need, i.e.:
    * if we need to search for playlists by title the query is:
        action='search';
        part='snippet';
        q=vm.playlist.title&type=playlist';
    * if we need to search for a specific playlist by id, the query is:
        action='playlistItems'
        part='snippet'
        playlistId=vm.playlist.playlistID
    * if we need to search for a specific video by id, the query is:
        action='videos';
        part='snippet';
        id=vm.playlist.videoiD;
  */

  vm.searchPlaylist = function() {
    youtubeSearch.search({
      action: 'search',
      part: 'snippet',
      query: 'q=' + vm.playlist.title + '&type=playlist',
    }).$promise.then(function(results) {
      vm.playlists = results.items;
      vm.playlist.title = '';
    });
  };
  
  $scope.$on('selected', function(event, selectedElement) {
    if(selectedElement.type === 'playlist') {
    // Here we get the playlist id from the emitted event
      youtubeSearch.search({
        action: 'playlistItems',
        part: 'snippet',
        playlistId: selectedElement.data
      }).$promise.then(function(results) {
        $location.path('/videos');
        vm.playlist = results.items;
      });
    } else {
      // Here we get the video id from the emitted event
        youtubeSearch.search({
        action: 'videos',
        part: 'snippet',
        playlistId: selectedElement.data
      }).$promise.then(function(results) {
        $location.path('/videos' + selectedElement.data);
        vm.video = results;
      });
    }
  });

}]);
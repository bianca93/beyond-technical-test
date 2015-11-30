'use strict';

angular.module('youtubeVideos').controller('VideosController', ['$scope', '$location', '$state', '$stateParams', '$window', '$sce', 'youtubeSearch',
 function($scope, $location, $state, $stateParams, $window, $sce, youtubeSearch) {
	var vm = this;
  vm.playlists = [];
  vm.videos = [];
  vm.video = {};
  vm.videoUrl = '';

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
      $location.path('/playlist/' + selectedElement.data);
    } else if(selectedElement.type === 'video') {
        $location.path('/video/' + selectedElement.data);
      }
    $scope.$apply();
  });

  vm.loadItemsIntoScope = function() {
    if($state.includes('playlist')) {
      // Here we get the playlist with the provided id
      youtubeSearch.search({
        action: 'playlistItems',
        part: 'snippet',
        query: 'playlistId=' + $stateParams.playlistId
      }).$promise.then(function(results) {
        vm.videos = results.items;
      });
    } else if($state.includes('video')) {
      // Here we get the video id from the emitted event
      youtubeSearch.search({
        action: 'videos',
        part: 'snippet',
        query: 'id=' + $stateParams.videoId
      }).$promise.then(function(results) {
        vm.video = results.items[0];
        var tempUrl = 'http://www.youtube.com/embed/' + vm.video.id;
        vm.videoUrl = $sce.trustAsResourceUrl(tempUrl);
      });
    }
  };
  
  vm.backLink = function() {
    $window.history.back();
  };
  
}]);
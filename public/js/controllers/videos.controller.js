'use strict';

angular.module('youtubeVideos').controller('VideosController', ['youtubeSearch',
 function(youtubeSearch) {
	var vm = this;
  vm.playlists = [];
  vm.playlist = {};

  vm.searchPlaylist = function() {
    youtubeSearch.search({
      query: vm.playlist.title,
      type: 'playlist'
    }).$promise.then(function(results) {
      vm.playlists = results.items;
      vm.playlist.title = '';
    });
  };

}]);
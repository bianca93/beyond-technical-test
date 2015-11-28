'use strict';

angular.module('youtubeVideos').controller('VideosController', ['youtubeSearch',
 function(youtubeSearch) {
	var vm = this;
  vm.playlists = [];
  vm.playlist = {};

  vm.searchPlaylist = function() {
    var results = youtubeSearch.search({
      query: vm.playlist.title,
      type: 'playlist'
    });
    vm.playlist.title = '';

    vm.playlists = results.items;
  };


}]);
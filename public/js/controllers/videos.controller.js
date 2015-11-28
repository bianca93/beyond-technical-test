'use strict';

angular.module('youtubeVideos').controller('VideosController', ['youtubeSearch',
 function(youtubeSearch) {
	var vm = this;
  vm.playlists = [];
  vm.playlist = {};

  vm.searchPlaylist = function() {
    vm.playlists = youtubeSearch.search({
      query: vm.playlist.title
    });
  };

}]);
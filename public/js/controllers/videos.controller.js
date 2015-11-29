'use strict';

angular.module('youtubeVideos').controller('VideosController', ['$scope', 'youtubeSearch',
 function($scope, youtubeSearch) {
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

  $scope.$on('selected', function(event, data) {
    console.log(data);
  });

}]);
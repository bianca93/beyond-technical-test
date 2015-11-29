'use strict';

angular.module('youtubeVideos').directive('searchItem', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/partials/searchItem.html'
  };
});
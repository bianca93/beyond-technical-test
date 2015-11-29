'use strict';

angular.module('youtubeVideos').directive('searchItem', function() {
  return {
    restrict: 'E',
    scope: {
      element: '='
    },
    replace: true,
    templateUrl: '/views/partials/searchItem.html',
    link: function($scope, $element) {
      $element.bind('click', function(){
        id($scope.element = playlist) {
          $scope.$emit('selected', { 
            data: $scope.element.id.playlistId, 
            type: 'playlist'
          });
        } else {
          $scope.$emit('selected', { 
            data: $scope.element.id.videoId, 
            type: 'video'
          });
        }
      });
    }
  };
});
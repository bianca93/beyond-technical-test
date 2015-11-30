'use strict';

angular.module('youtubeVideos').directive('searchItem', function() {
  return {
    restrict: 'E',
    scope: {
      element: '=',
      type: '='
    },
    replace: true,
    templateUrl: '/views/partials/searchItem.html',
    link: function($scope, $element, $window) {
      $scope.thumbnail = {};

      if($window.innerWidth <= 480) {
        $scope.thumbnail.url = $scope.element.snippet.thumbnails.default.url;
      } else {
        $scope.thumbnail.url = $scope.element.snippet.thumbnails.medium.url;
      }

      $element.bind('click', function(){
        if($scope.type === 'playlist') {
          $scope.$emit('selected', { 
            data: $scope.element.id.playlistId, 
            type: $scope.type
          });
        } else if($scope.type === 'video') {
          $scope.$emit('selected', { 
            data: $scope.element.snippet.resourceId.videoId, 
            type: $scope.type
          });
        }
      });
    }
  };
});
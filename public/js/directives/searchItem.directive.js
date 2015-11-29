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
        $scope.$emit('selected', $scope.element.id.playlistId);
      });
    }
  };
});
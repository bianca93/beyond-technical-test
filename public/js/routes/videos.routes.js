'use strict';

// Setting up route
angular.module('youtubeVideos').config(['$stateProvider',
  function ($stateProvider) {
    // Youtube videos state routing
    $stateProvider
      .state('videos', {
        url: '/videos',
        template: 'CACAt'
      })
      .state('videos.view', {
        url: '/videos/:videoId',
        templateUrl: '../../../views/partials/videoDetails.html'
      });
  }
]);
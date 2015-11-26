'use strict';

// Setting up route
angular.module('youtubeVideos').config(['$stateProvider',
  function ($stateProvider) {
    // Youtube videos state routing
    $stateProvider
      .state('videos', {
        url: '/videos',
        template: 'public/views/partials/videosList.html'
      })
      .state('videos.view', {
        url: '/:videos',
        templateUrl: 'public/views/partials/videoDetails.html'
      });
  }
]);
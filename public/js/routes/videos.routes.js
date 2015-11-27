'use strict';

// Setting up route
angular.module('youtubeVideos').config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    // Youtube videos state routing
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: '/views/partials/dashboard.html'
      })
      .state('videos', {
        url: '/videos',
        templateUrl: '/views/partials/videosList.html'
      })
      .state('videos.view', {
        url: '/:videoId',
        templateUrl: '/views/partials/videoDetails.html'
      });
  }
]);
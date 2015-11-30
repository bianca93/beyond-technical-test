'use strict';

// Setting up route
angular.module('youtubeVideos').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    // Youtube videos state routing
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: '/views/partials/dashboard.html'
      })
      .state('playlist', {
        url: '/playlist/:playlistId',
        templateUrl: '/views/partials/videosList.html'
      })
      .state('video', {
        url: '/video/:videoId',
        templateUrl: '/views/partials/videoDetails.html'
      });
  }
]);
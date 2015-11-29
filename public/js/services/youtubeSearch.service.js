'use strict';

angular.module('youtubeVideos').factory('youtubeSearch', ['$resource', 
  function($resource) {
    return $resource('https://www.googleapis.com/youtube/v3/:action?part=:part&:query&key=:apiKey', {
      action: '@action',
      part: '@part',
      query: '@query'
    },{
      search: {
        method: 'GET',
        params: {
          action: '@action',
          part: '@part',
          query: '@query',
          apiKey: 'INSERT API KEY HERE'
        }
      }
    });
  }
]);
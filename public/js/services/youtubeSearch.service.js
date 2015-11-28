'use strict';

angular.module('youtubeVideos').factory('youtubeSearch', ['$resource', 
  function($resource) {
    return $resource('https://www.googleapis.com/youtube/v3/search?part=:part&q=:query&key=:apiKey', {
      query: '@query'
    },{
      search: {
        method: 'GET',
        params: {
          part: 'snippet',
          query: '@query',
          apiKey: '<INSERT API KEY HERE>'
        }
      }
    });
  }
]);
'use strict';

angular.module('youtubeVideos').factory('youtubeSearch', ['$resource', 
  function($resource) {
    return $resource('https://www.googleapis.com/youtube/v3/search?part=:part&q=:query&type=:type&key=:apiKey', {
      query: '@query',
      type: '@type'
    },{
      search: {
        method: 'GET',
        params: {
          part: 'snippet',
          query: '@query',
          type: '@type',
          apiKey: 'INSERT API KEY HERE'
        }
      }
    });
  }
]);
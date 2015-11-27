'use strict';

angular.module('youtubeVideos').service('youtubeSearch', ['$http', '$q', 
  function($http, $q) {
    var defer = $q.defer();

    this.requestSearch =  function(query) {
      gapi.client.setApiKey('INSERT API KEY HERE');
      gapi.client.load('youtube', 'v3', function() {
        var req = gapi.client.youtube.search.list({
          q: query,
          part: 'snippet'
        });

        req.execute(function(res) {
          defer.resolve(res.result);
        });
      });

      return defer.promise;
    };
  }
]);
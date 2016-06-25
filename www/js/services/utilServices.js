'use strict';

angular

  .module('byAllMeans')

  .factory('Util', function($window) {
    return {
      urlParse: function(url) {
        var a = document.createElement('a');
        a.href = url;
        // Special treatment for IE, see http://stackoverflow.com/a/13405933 for details
        if (a.host === '') {
          a.href = a.href;
        }
        return a;
      },
      isSameOrigin: function(url, origins) {
        url = this.urlParse(url);
        origins = (origins && [].concat(origins)) || [];
        origins = origins.map(this.urlParse);
        origins.push($window.location);
        origins = origins.filter(function(o) {
          return url.hostname === o.hostname &&
            //url.port === o.port &&
            url.protocol === o.protocol;
        });
        return (origins.length >= 1);
      }
    }
  });

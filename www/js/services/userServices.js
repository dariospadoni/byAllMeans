'use strict';

angular

  .module('byAllMeans')

  .factory('UserServices', function ($resource, API_ENDPOINT) {
    return $resource(API_ENDPOINT + '/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  });

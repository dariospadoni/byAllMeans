'use strict';

angular

  .module('byAllMeans')

  .factory('JourneyServices', function($http, API_ENDPOINT) {
    var currentUser = null;

    function getBusLine(busId) {
      return $http.get(API_ENDPOINT + '/api/buses/number/' + busId);
    }

    function getLineStops(lineId) {
      return $http.get(API_ENDPOINT + '/api/lines/' + lineId + '/stops');
    }

    function checkin(lineId) {
      return $http.post(API_ENDPOINT + '/api/checks/',
        {
          'userId': '576e3fd3b81139ec43843c5e',
          'deviceId': '0123456789',
          'meanType': 'bus',
          'bus': {
            'number': '7A',
            'lineId': lineId
          },
          'otherPassengers': [{
            'fare': 0,
            'price': 1.30
          }],
          'destination': {
            'id': 234,
            'name': ''
          },
          'batteryLevel': 50,
          'positionStart': [0, 0],
          'timeStart': 1466841150612,
          'ongoing': true,
          'zones': [{
            'id': 6,
            'name': ''
          }, {
            'id': 7,
            'name': ''
          }, {
            'id': 8,
            'name': ''
          }]
        }
      );
    }

    function checkout(checkinId) {
      return $http.put(API_ENDPOINT + '/api/checks/' + checkinId,
        {
          'userId': '576e3fd3b81139ec43843c5e',
          'deviceId': '0123456789',
          'meanType': 'bus',
          'positionEnd': [0, 0],
          'timeEnd': 1466844698212,
          'bus': {
            'number': '7A',
            'lineId': '123'
          }
        });
    }


    return {
      getBusLine: getBusLine,
      getLineStops: getLineStops,
      checkin: checkin,
      checkout: checkout
    };

  });


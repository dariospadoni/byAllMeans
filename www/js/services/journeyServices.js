'use strict';

angular

  .module('byAllMeans')

  .factory('JourneyServices', function($http, $q, API_ENDPOINT) {

    function getBusLine(busId) {
      return $http.get(API_ENDPOINT + '/api/buses/number/' + busId);
    }

    function getLineStops(lineId) {
      return [{"_id":"576e7f9cfa0a61891845fea4","type":"Feature","properties":{"OBJECTID":214,"HSTNR":5332,"HSTHAUPTNA":"Rammersdorf","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.604242068766109,46.677235789323205]}},{"_id":"576e7f9cfa0a61891845fea5","type":"Feature","properties":{"OBJECTID":215,"HSTNR":5330,"HSTHAUPTNA":"Kaltenbrunner Siedlung Ost","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.62020445662023,46.66843690824237]}},{"_id":"576e7f9cfa0a61891845fea6","type":"Feature","properties":{"OBJECTID":216,"HSTNR":5331,"HSTHAUPTNA":"Kaltenbrunner Siedlung West","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.614092381103296,46.6696110163045]}},{"_id":"576e7f9cfa0a61891845fea7","type":"Feature","properties":{"OBJECTID":217,"HSTNR":5333,"HSTHAUPTNA":"Hafendorf","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.587606938495934,46.67870066674386]}},{"_id":"576e7f9cfa0a61891845fea8","type":"Feature","properties":{"OBJECTID":218,"HSTNR":5334,"HSTHAUPTNA":"St. Margarethen ob Töllerberg","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.573438486718025,46.676922294191684]}},{"_id":"576e7f9cfa0a61891845fea9","type":"Feature","properties":{"OBJECTID":219,"HSTNR":5335,"HSTHAUPTNA":"Korb Weissnegger","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.570368229689706,46.68085648247466]}},{"_id":"576e7f9cfa0a61891845feaa","type":"Feature","properties":{"OBJECTID":220,"HSTNR":5336,"HSTHAUPTNA":"Korb","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.563205429519462,46.68872801367257]}},{"_id":"576e7f9cfa0a61891845feab","type":"Feature","properties":{"OBJECTID":221,"HSTNR":5337,"HSTHAUPTNA":"St. Georgen am Weinberge","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.559998575565759,46.69380393583571]}},{"_id":"576e7f9cfa0a61891845feac","type":"Feature","properties":{"OBJECTID":222,"HSTNR":5338,"HSTHAUPTNA":"Krenobitsch","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.575753936274092,46.66702386459381]}},{"_id":"576e7f9cfa0a61891845feae","type":"Feature","properties":{"OBJECTID":224,"HSTNR":5340,"HSTHAUPTNA":"Greuth Dertnig Kreuz","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.537193149983878,46.66379231435396]}},{"_id":"576e7f9cfa0a61891845feaf","type":"Feature","properties":{"OBJECTID":225,"HSTNR":5341,"HSTHAUPTNA":"Unterbergen Abzw P Tainach","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.52925314368761,46.67150590086863]}},{"_id":"576e7f9cfa0a61891845feb0","type":"Feature","properties":{"OBJECTID":226,"HSTNR":5342,"HSTHAUPTNA":"Salchendorf Abzw","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.514976204329527,46.67805552541543]}},{"_id":"576e7f9cfa0a61891845feb4","type":"Feature","properties":{"OBJECTID":230,"HSTNR":5343,"HSTHAUPTNA":"Ruhstatt Rastplatz","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.598128567898925,46.651436304430064]}},{"_id":"576e7f9cfa0a61891845feb6","type":"Feature","properties":{"OBJECTID":232,"HSTNR":5339,"HSTHAUPTNA":"Pörtschach am Töllerberg West","LINNR":"5402","AKT_DATE":"2014-02-12T13:41:45"},"geometry":{"type":"Point","coordinates":[14.569282659562923,46.657196966149804]}}];

      //return $http.get(API_ENDPOINT + '/api/lines/' + lineId + '/stops');
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


'use strict';

angular

  .module('byAllMeans')

  .controller('CheckinController', function($scope, $state) {
  /*
    $scope.stops = [];

    $scope.getStops = function(busId) {
      JourneyServices.getBusLine(busId).then(function(data) {
        $scope.stops = data.data;
        $state.$go('stops')
      });
    };

*/

    $scope.onStopSelected = function() {
      $state.go('journey-confirmation');
    };


  });


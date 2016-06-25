'use strict';

angular

  .module('byAllMeans')

  .controller('CheckinController', function($scope, JourneyServices) {

    $scope.stops = [];

    $scope.getStops = function(busId) {
      JourneyServices.getBusLine(busId).then(function(data) {
        $scope.stops = data.data;
        $state.$go('stops')
      });
    };

  });


'use strict';

angular

  .module('byAllMeans')

  .directive('lineStops', function() {
      return {
          restrict: 'E',
          scope: {
              stops: '=',
              onStopSelected: '&'
          },
          template:
              '<div class="list">' +
                '<a class="item item-icon-left" ng-click="selectStop(stop)" ng-repeat="stop in stops">{{stop.properties.HSTHAUPTNA}}</a>' +
              '</div>',
          replace: true,
          controller: function($scope) {

              $scope.selectStop = function(stop) {
                  if ($scope.onStopSelected) {
                      $scope.onStopSelected(stop);
                  }
              }

          }

      };
  });
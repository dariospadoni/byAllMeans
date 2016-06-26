'use strict';

angular

  .module('byAllMeans')

  .directive('lineStops', function() {
      return {
          restrict: 'E',
          scope: {
              stops: '=',
              onStopSelected: '&',
              lastStop: '='
          },
          template:
              '<i class="list">' +
                '<a class="item item-icon-left" ng-click="selectStop(stop)" ng-repeat="stop in stops track by $index">' +
                  '{{stop.properties.HSTHAUPTNA}}' +
                  '<i ng-show="$index==0" class="ion-ios-circle-outline" style="position: absolute; top: 15px; color: #333; left: 19px; font-size: 22px;"></i>' +
                  '<div ng-show="$index==0" style="position: absolute; top: 35px; bottom: 0; border: 1px solid #ddd; width: 1px; left: 27px;"></div>' +

                  '<div ng-show="$index>0 && !$last" style="position: absolute; top: 0; bottom: 0; border: 1px solid #ddd; width: 1px; left: 27px;"></div>' +

                  '<div ng-show="$last" style="position: absolute; top: 0px; bottom: 34px; border: 1px solid #ddd; width: 1px; left: 27px;"></div>' +
                  '<i ng-show="$last" class="ion-ios-circle-outline" style="position: absolute; top: 15px; color: #333; left: 19px; font-size: 22px;"></i>' +
              '</a>' +
              '</div>',
          replace: true,
          controller: function($scope) {

              if ($scope.lastStop) {
                var validStops = [];
                for( var i=0; i<$scope.stops.length; i++) {
                  if ($scope.stops[i].properties.OBJECTID === $scope.lastStop) {
                    validStops.push($scope.stops[i]);
                    break;
                  } else {
                    validStops.push($scope.stops[i]);
                  }
                };

                $scope.stops = validStops;
                console.log(validStops);
              }

              $scope.selectStop = function(stop) {
                  if ($scope.onStopSelected) {
                      $scope.onStopSelected({stop: stop});
                  }
              }


          }

      };
  });
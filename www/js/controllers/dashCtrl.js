'use strict';

angular

  .module('byAllMeans')

  .controller('DashCtrl', function($scope, $state, STORAGE_RUN, JourneyServices) {
    var canScan = false;
    $scope.showScan = true;


    $scope.showPage = function (page) {
      $scope.showScan = page === 'scan';
    };



    document.addEventListener("deviceready", function () {
      console.log('device ready');
      canScan = (window.cordova && window.cordova.plugins && window.cordova.plugins.barcodeScanner) ? true : false;
      if (canScan || !localStorage.getItem(STORAGE_RUN)) {
        scan();
      } else {
        $state.go('tab.account');
      }
    });

    function scan () {
      $cordovaBarcodeScanner.scan().then(function(result){
        if (!result.cancelled && result.format === "QR_CODE"){
          console.log('scan: ' + result.text );
          var meanType = result.text.split('_')[0];
          var meanId = result.text.split('_')[1];
          if (['bus', 'train'].indexOf(meanType) !== -1) {
            JourneyServices.getBusLine(meanId).then(function(res) {
              JourneyServices.getLineStops(res.properties.LINIEN).then(function(res) {
                $scope.stops = res.data;
                $scope.showPage('checkin');
              });
            })
          } else {
            $scope.showPage('journey');
          };
        }
        console.log(JSON.stringify(result));
      }, function(cause){
        console.log(JSON.stringify(cause));
      })
    };


});

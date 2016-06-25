angular.module('byAllMeans.controllers', [])

.controller('DashCtrl', function($rootScope, $scope,  $cordovaBarcodeScanner, $cordovaGeolocation, $cordovaBatteryStatus) {
  var canScan = false;
  var canLocalize = false;
  var watchID = "";
  var navigationOptions = { timeout: 30000, enableHighAccuracy: true };
  $scope.batteryLevel = 0;       // (0 - 100)
  $scope.isPluggedIn = false;
  $scope.gelocationData = {};

  var onSuccess = function(position) {
    var gelocationData = {
      latlong: [position.coords.latitude, position.coords.longitude],
      altitude: position.coords.altitude,
      accurancy: position.coords.accuracy,
      heading: position.coords.heading,
      speed: position.coords.speed,
      timestap: position.timestamp,
      idwatch: watchID
    }
    angular.copy(gelocationData, $scope.gelocationData);
    $scope.$apply();
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
    //The device cannot trace the gps coordinates: idbus is degrade state.
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
  }

  document.addEventListener("deviceready", function () {
    console.log('device ready');
    canScan = (window.cordova && window.cordova.plugins && window.cordova.plugins.barcodeScanner) ? true : false;
    canLocalize = (window.cordova && window.navigator.geolocation) ? true : false;

    watchID = navigator.geolocation.watchPosition(onSuccess, onError, navigationOptions);

    $rootScope.$on('$cordovaBatteryStatus:status', function (event, result) {
        $scope.batteryLevel = result.level;       // (0 - 100)
        $scope.isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:critical', function (event, result) {
      $scope.batteryLevel = result.level;       // (0 - 100)
      $scope.isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:low', function (event, result) {
      $scope.batteryLevel = result.level;       // (0 - 100)
      $scope.isPluggedIn  = result.isPlugged;   // bool
    });

  }, false);

  $scope.scan = function () {
    if (canScan){
      $cordovaBarcodeScanner.scan().then(function(result){
        if (!result.cancelled && result.format === "QR_CODE"){
          $scope.text = result.text;
        }
        console.log(JSON.stringify(result));
      },
      function(cause){
        console.log(JSON.stringify(cause));
      })
    } else{
      console.log('not allowed');
    }
  };

  $scope.getCurrentPosition = function(){

    if (canLocalize){
      //navigator.geolocation.getCurrentPosition(onSuccess, onError);
      if (watchID == ""){
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, navigationOptions);
      } else {
        navigator.geolocation.clearWatch(watchID);
        watchID = "";
        angular.copy({}, $scope.gelocationData)
      }
    }
  }
})

.controller('SettingsCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})


.controller('AccountCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope){

});

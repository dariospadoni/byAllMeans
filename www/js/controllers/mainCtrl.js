'use strict';

angular

  .module('byAllMeans')

  .controller('MainController', function($scope, $rootScope, $state, AuthServices, JourneyServices) {

    $scope.currentJourney = {
      departure: 'St. Salvator',
      arrival: 'Klagenfurt',
      price: 2.2,
      tickets: {
        normal: 1,
        reduced: 0,
        family: 0,
        senior: 0
      },
      numPassengers: 1
    };

    $scope.onStopSelected = function(stop) {
      console.log(stop);
    };

    $scope.confirmJourney = function() {
      alert(1);
    };

    $scope.init = function() {
      JourneyServices.getLineStops(5402).then(function(res) {
        $scope.stops = res.data;
      });
/*
      JourneyServices.getBusLine('7A').then(function(data) {
        JourneyServices.checkin(data.lineId).then(function(d) {
          JourneyServices.checkout(d.data._id).then(function(e) {
              console.log(e);
          });

        })
      });
      */
      console.log('MainCtrl init...');
      //no logged user, redirect to login
      if (AuthServices.getLoggedUser() === null) {
        console.log('no user loggedin, redirecting to login');
        $state.go('login', {notify: false}, { reload: true});
      }
      else {
        console.log('user already loggedin');
        $state.go('login');//$state.go('tab.dash');
      }
    };

    $rootScope.$on('login', function() {
      $state.go('tab.dash');
    });

    $scope.logout = function() {
      AuthServices.logout();
      $state.go('login');
    };

    ionic.Platform.ready(function () {
      //initialize here
      console.log('ionic ready');
      $scope.init();
      setTimeout(function () {
        if (navigator && navigator.splashscreen) {
          console.log('hiding splash screen');
          navigator.splashscreen.hide();
        }
      }, 100);
    });

  });

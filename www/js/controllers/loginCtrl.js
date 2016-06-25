'use strict';

angular

  .module('byAllMeans')

  .controller('LoginController', function($scope, $rootScope, $state, AuthServices, $ionicLoading) {

    $scope.data = { email: '', password: '' };
    $scope.data = { email: 'mario@test.com', password: '123' };

    $scope.submit = function() {
      $scope.errorMsg = null;
      $ionicLoading.show();
      AuthServices.login();
      $rootScope.$broadcast('login');
      $ionicLoading.hide();
    };

  });


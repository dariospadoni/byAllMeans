'use strict';

angular

  .module('byAllMeans')

  .controller('LoginController', function($scope, $rootScope, $state, AuthServices, $ionicLoading) {

    $scope.data = { email: '', password: '' };
    $scope.data = { email: 'mario@test.com', password: '123' };

    $scope.submit = function() {
      $scope.errorMsg = null;
      $ionicLoading.show();
      AuthServices
        .login($scope.data)
        .then(function() {
          $rootScope.$broadcast('login');
        }, function(errorMsg) {
          $scope.errorMsg = errorMsg ;
        })
        .finally(function(){
          $ionicLoading.hide();
        });
    };

  });


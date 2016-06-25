'use strict';

angular

  .module('byAllMeans')

  .factory('AuthServices', function($q, $http, $cookies, API_ENDPOINT, STORAGE_USER_KEY, UserServices) {
    function Login(data){
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: API_ENDPOINT + '/auth/local',
        data: data
      }).then(function(res) {
        $cookies.put('token', res.data.token);
        UserServices.get(function(currentUser) {
          localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser));
          deferred.resolve();
        });
      });
      return deferred.promise;
    }

    function GetLoggedUser() {
      return localStorage.getItem(STORAGE_USER_KEY) || null;
    }

    function LogOut() {
      $cookies.remove('token');
      localStorage.removeItem(STORAGE_USER_KEY);
    }

    return {
      login: Login,
      logout: LogOut,
      getLoggedUser: GetLoggedUser
    };

  });


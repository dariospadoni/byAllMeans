'use strict';

angular

  .module('byAllMeans')

  .factory('AuthServices', function($q, $http, $cookies, API_ENDPOINT, STORAGE_USER_KEY, UserServices) {
    function Login() {
      var user = '{"_id":"576e80261217fc7f81b4a687","provider":"local","firstName":"Mario","lastName":"Rossi","email":"mario@test.com","code":"2","__v":0,"role":"user","creditCard":{"number":"1234123412341234","exporationYear":2017,"security":"123"}}';
      localStorage.setItem(STORAGE_USER_KEY, user);
      return;
      /*
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
      return deferred.promise;*/
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


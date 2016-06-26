'use strict';

angular
  .module('byAllMeans', ['ionic', 'ngCordova', 'ngResource', 'ngCookies', 'byAllMeans.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    console.log('ionic platform ready')
  });

})

.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $httpProvider.interceptors.push('authInterceptor');

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })

  .state('journey-confirmation', {
    url: '/journey-confirmation',
    templateUrl: 'templates/journey-confirmation.html'
  })

  .state('journey-checkin', {
    url: '/journey-checkin',
    templateUrl: 'templates/journey-checkin.html',
    controller: 'CheckinController'
  })

  .state('journey-checkout', {
    url: '/journey-checkout',
    templateUrl: 'templates/journey-checkout.html'
  })

  .state('journey-reports', {
    url: '/journey-reports',
    templateUrl: 'templates/journey-reports.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-profile.html'
      }
    }
  })

  .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('#/tab/dash');

});

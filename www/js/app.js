// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function(){
  'use strict';
  angular.module('starter', ['ionic', 'starter.controllers','firebase','ionic-toast'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'student/menu.html',
          controller: 'AppCtrl'
          //resolve: user.email
        })
        .state('app.login', {
          url: '/login',
          views: {
            'menuContent': {
              templateUrl: 'student/login.html'
            }
          }
        })

        .state('app.studentsList', {
          url: '/studentsList',
          views: {
            'menuContent': {
              templateUrl: 'student/admin/studentsInfo/studentsList.html'
              //controller:'AppCtrl'
            }
          }
        })

        .state('app.particularStudentDetails', {
          url: '/studentsList/:id',
          views: {
            'menuContent': {
              templateUrl: 'student/admin/studentsInfo/studentDetails/particularStudentDetails.html'
              //controller: 'studentDetailsController',
              //controllerAs:'vm'
            }
          }
        })

        .state('app.idCard', {
          url: '/idCard',
          views: {
            'menuContent': {
              templateUrl: 'student/idCard.html'
            }
          }
        })

        .state('app.payFees', {
          url: '/payFees',
          views: {
            'menuContent': {
              templateUrl: 'student/feePay/payFees.html'
            }
          }
        })
        .state('app.payFees.payFeesMonthly', {
          url: '/payFeesMonthly',
          views: {
            'payFeesMonthly-tab': {
              templateUrl: 'student/feePay/payFeesMonthly.html'
              //controller: 'HomeTabCtrl'
            }
          }
        })
        .state('app.payFees.payFeesBeltTest', {
          url: '/payFeesBeltTest',
          views: {
            'payFeesBeltTest-tab': {
              templateUrl: 'student/feePay/payFeesBeltTest.html'
              //controller: 'HomeTabCtrl'
            }
          }
        })
        .state('app.payFees.payFeesSeminar', {
          url: '/payFeesSeminar',
          views: {
            'payFeesSeminar-tab': {
              templateUrl: 'student/feePay/payFeesSeminar.html'
            }
          }
        })

        .state('app.attendance', {
          url: '/attendance',
          views: {
            'menuContent': {
              templateUrl: 'student/attendance.html'
            }
          }
        })

        .state('app.markAttendance', {
          url: '/markAttendance',
          views: {
            'menuContent': {
              templateUrl: 'student/markAttendance.html'
            }
          }
        })

        .state('app.history', {
          url: '/history',
          views: {
            'menuContent': {
              templateUrl: 'student/myHistory/history.html'
            }
          }
        })

        .state('app.history.joiningDate', {
          url: '/joiningDate',
          views: {
            'joiningDate-tab': {
              templateUrl: 'student/myHistory/joiningDate.html'
            }
          }
        })

        .state('app.history.beltsUpgradation', {
          url: '/beltsUpgradation',
          views: {
            'beltsUpgradation-tab': {
              templateUrl: 'student/myHistory/beltsUpgradation.html'
            }
          }
        })

        .state('app.history.seminarsAttended', {
          url: '/seminarsAttended',
          views: {
            'seminarsAttended-tab': {
              templateUrl: 'student/myHistory/seminarsAttended.html'
            }
          }
        })

        .state('app.notifications', {
          url: '/notifications',
          views: {
            'menuContent': {
              templateUrl: 'student/notifications.html'
            }
          }
        })

        .state('app.chats', {
          url: '/chats',
          views: {
            'menuContent': {
              templateUrl: 'student/chats.html',
              controller: 'AppCtrl'
            }
          }
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/login');
    });
})();

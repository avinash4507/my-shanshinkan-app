(function() {
  'use strict';
  angular.module('starter.controllers', [])

    .controller('AppCtrl',['$scope','$ionicModal','$timeout', function ($scope,$ionicModal,$timeout) {
       // With the new view caching in Ionic, Controllers are only called
       // when they are recreated or on app start, instead of every page change.
       // To listen for when this page is active (for example, to refresh data),
       // listen for the $ionicView.enter event:
       //$scope.$on('$ionicView.enter', function(e) {
       //});
      $scope.asdf = "Avinash";
      // Form data for the login modal
      //$scope.loginData = {};

      // Create the login modal that we will use later
    /*  $ionicModal.fromTemplateUrl('student/login.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });
      $scope.fgh = {
        background: 'url(img/depositphotos.jpg)',
      };
      // Triggered in the login modal to close it
      $scope.closeLogin = function () {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function () {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
          $scope.closeLogin();
        }, 1000);
      };*/
    }])

    .controller('SampleCtrl', ['$scope','$location',function($scope,$location) {
        $scope.login= function () {
          var ref = new Firebase("https://incandescent-fire-7180.firebaseio.com");
          ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              // the access token will allow us to make Open Graph API calls
              console.log(authData.facebook.accessToken);
            }
          }, {
            scope: "email,user_likes" // the permissions requested
          });
          var isNewUser = true;
          ref.onAuth(function(authData) {
            if (authData && isNewUser) {
              // save the user's profile into the database so we can list users,
              // use them in Security and Firebase Rules, and show profiles
              ref.child("users").child(authData.uid).set({
                provider: authData.provider,
                name: getName(authData)
              });
            }
            $location.path('/app/idCard');
          });
// find a suitable name based on the meta info given by each provider
          function getName(authData) {
            switch(authData.provider) {
              case 'password':
                return authData.password.email.replace(/@.*/, '');
              case 'twitter':
                return authData.twitter.displayName;
              case 'facebook':
                return authData.facebook.displayName;
            }
          }
        }
    }]);
})();


(function() {
  'use strict';
  angular.module('starter')
    .controller('studentDetailsController', ['$scope','GetStudentService','$stateParams', function($scope,GetStudentService,$stateParams) {
      var vm=this;
      var id=$stateParams.id;
      getDataById(id);
      function getDataById($id) {
        vm.particularStudentDetails=GetStudentService.getDataById($id);
        return vm.particularStudentDetails;
      }
    }]);
})();

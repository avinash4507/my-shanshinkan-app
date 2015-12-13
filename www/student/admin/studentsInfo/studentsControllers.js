(function() {
  'use strict';
  angular.module('starter')
    .controller('studentsController', ['GetStudentService', function(GetStudentService) {
      var vm = this;
      vm.listOfAllStudents=GetStudentService.getAllStudentsList();
    }]);
})();

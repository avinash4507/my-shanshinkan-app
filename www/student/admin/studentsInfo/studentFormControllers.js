(function() {
  'use strict';
  angular.module('starter')
  .controller('addStudentController', ['$ionicModal',function($ionicModal){
      var vm=this;
      $ionicModal.fromTemplateUrl('student/admin/studentsInfo/addNewStudent.html', {
        animation: 'slide-in-up'
      }).then(function(modal) {
        vm.modal = modal;
      });
      vm.openModal = function() {
        vm.modal.show();
      };
      //vm.closeModal = function() {
      //  vm.modal.hide();
      //};
  }])
  .controller('studentFormCtrl',['GetStudentService','ionicToast',function(GetStudentService,ionicToast){
      var vm=this;
      vm.studentAdd=GetStudentService.getAllStudentsList();
      vm.addStudentUsingForm=function(){
        if (vm.name && vm.gender && vm.fatherName && vm.motherName && vm.contactNo && vm.email && vm.dob &&
          vm.maritalStatus && vm.langKnown && vm.address && vm.admissionDate && vm.regId && vm.batch && vm.status) {
          vm.studentAdd.$add({
            "name": vm.name,
            "gender": vm.gender,
            "fatherName": vm.fatherName,
            "motherName": vm.motherName,
            "contactNo": vm.contactNo,
            "email": vm.email,
            "dob": vm.dob,
            "maritalStatus": vm.maritalStatus,
            "langKnown": vm.langKnown,
            "address": vm.address,
            "admissionDate": vm.admissionDate,
            "regId": vm.regId,
            "batch": vm.batch,
            "status": vm.status
          });
          vm.name=""; vm.gender=""; vm.fatherName=""; vm.motherName=""; vm.contactNo=""; vm.email=""; vm.dob=""; vm.maritalStatus="";
          vm.langKnown=""; vm.address=""; vm.admissionDate=""; vm.regId=""; vm.batch=""; vm.status="";
          vm.showToast = function(){
            <!-- ionicToast.show(message, position, stick, time); -->
            ionicToast.show('Data Saved Successfully!!!', 'middle', false, 2000);
          };
        }
      }

  }]);
})();

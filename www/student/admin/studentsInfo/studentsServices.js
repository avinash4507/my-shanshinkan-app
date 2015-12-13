(function() {
  'use strict';
  angular.module('starter')
    .factory('GetStudentService', ['$firebaseArray', function ($firebaseArray) {
      var itemsRef = new Firebase("https://incandescent-fire-7180.firebaseio.com/students");
      var list= $firebaseArray(itemsRef);
      var service={
        getAllStudentsList:getAllStudentsList,
        getDataById:getDataById
      };
      return service;
      function getAllStudentsList(){
        return list;
      }
      function getDataById($id){
        var studRec=list.$getRecord($id);
        return studRec;
      }
    }]);
})();



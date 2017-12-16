(function() {
  'use strict';
  angular.module('app', ['ngMaterial'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  }
})();
(function(angular, undefined) {
    "use strict";
    angular.module('dsntApp', ['ngMaterial', "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "partials/home.html"
        })
        .state('randomImages', {
            url: "/randomImages",
            templateUrl: "partials/randomImages.html"
        })
        .state('view3', {
            url: "/view3",
            templateUrl: "partials/view3.html"
        })
        ;
    })
    .controller('tabCtrl', function($scope, $location, $log) {
        $scope.selectedIndex = 0;
    });

})(angular);
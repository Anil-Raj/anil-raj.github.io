angular.module('app', ['ngRoute', 'randomImage'])
    .controller('Ctrl', ['$scope', '$http', '$location', 
    	function ($scope, $http, $location ) {
    	}
    ])
    .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.

            when('/randomImage', {
                template: '<random-image></random-image>'
            }).
            when('/animation', {
                template: '<animation></animation>'
            }).

          otherwise('/');
    }
    ]);
import indexController from './common/indexController.js';
import loginController from './common/loginController.js';

var sb = angular.module('sb', ['underscore', 'ngRoute', 'angularMoment']);
sb.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.withCredentials = true;

    $routeProvider.when('/', {
        templateUrl: '/views/login.html',
        controller: 'loginController',
        // resolve: {
        //     "check": function($location, $cookies) {
        //         if ($cookies.get('token')) {
        //             $location.path('/home');
        //         } else {
        //             $location.path('/'); //redirect user to home.
        //         }
        //     }
        // }
    }).otherwise({
        redirectTo: '/' //Redirect to home page on invalid path
    });
}]);

sb.controller('indexController', indexController);
sb.controller('loginController', loginController);

indexController.$inject = ['$http', '$q', '$timeout', '$window', '$location'];
loginController.$inject = ['$http', '$q', '$timeout', '$window', '$location'];
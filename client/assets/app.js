var app = angular.module('app', ['ngRoute']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
          .when('/home', {
            templateUrl: 'partials/home2.html',
          })
          .when('/join', {
            templateUrl: 'partials/join.html',
            controller: 'JoinController'
          })
          .when('/about', {
            templateUrl: 'partials/about.html',
          })
          .when('/events', {
            templateUrl: 'partials/events.html',
          })
          .when('/gallery', {
            templateUrl: 'partials/gallery.html',
          })
          .when('/contact', {
            templateUrl: 'partials/contact.html',
          })
          .otherwise({
            redirectTo: '/home'
          });
}]);

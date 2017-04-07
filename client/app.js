const angular = require('angular');
require('angular-ui-router');

angular
  .module('gradeBook', []);
  .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('signin', {
      url: '/signin',
      template: '<signin></signin>'
    })
    .state('show', {
      url: '/show',
      template: '<show></show>'
    });

    $urlRouterProvider.otherwise('/');
}


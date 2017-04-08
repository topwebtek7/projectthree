const angular = require('angular');
require('angular-ui-router');

angular
  .module('gradeBook', ['ui.router'])
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
    .state('signup', {
      url: '/signup',
      template: '<signup></signup>'
    })
    .state('show', {
      url: '/show/:id',
      template: '<show></show>'
    });

    $urlRouterProvider.otherwise('/');
}

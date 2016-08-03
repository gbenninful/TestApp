(function() {
  'use strict';

  angular
    .module('testApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('customer', {
        url: '/customer',
        templateUrl: 'app/customers/customer.html',
        controller: 'CustomersController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();


(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('CustomersController', CustomersController);

  /** @ngInject */
  function CustomersController() {
    var vm = this;
    var counter = 0;

    vm.customer = {
      name: 'Peter Abraham',
      street: '1234 Anywhere St.'
    };

    vm.customers = [
      {
        name: 'David',
        street: '1234 Anywhere St.'
      },
      {
        name: 'Tina',
        street: '1800 Crest St.'
      },
      {
        name: 'Michelle',
        street: '890 Main St.'
      }
    ];

      vm.addCustomer = function () {
      counter++;
        vm.customers.push({
          name: 'New Customer' + counter,
          street: counter + ' Cedar Point St.'
        });
    };

    vm.changeData = function () {
      counter++;
      vm.customer = {
        name: 'James Bond',
        street: counter + ' Cedar Point St.'
      };
    };


  }

}());

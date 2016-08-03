(function () {
  'use strict';

  angular
    .module('testApp')
    .directive('customerPanel', customerPanel)
    .directive('myDomDirective', domDirective)
    .directive('clickFunction', clickFunction);

  /** @ngInject */
  function customerPanel () {
    var directiveObj = {
      restrict: 'EA',
      replace: false,
      scope: {
        name: '@',
        streetAddress: '@',
        options: '='
      },
      templateUrl: 'app/customers/customer-panel.html'
    };

    return directiveObj;
  }

  function domDirective () {
    var directiveObj = {
      link: function ($scope, element) {
        element.bind('click', function () {
          element.html('You clicked me!!!');
        });

        element.bind('mouseenter', function () {
          element.css('background-color', 'deeppink');
        })

        element.bind('mouseleave', function () {
          element.css({
            'background-color': 'orange',
            'color': 'green'
          });
        });
      }
    };

    return directiveObj;
  }

  function clickFunction () {
    var directiveObj = {
      restrict: 'EA',
      replace: false,
      scope: {
        datasource: '=',
        action: '&'
      },
      templateUrl: 'app/customers/click-function.html'
      // template: '<ul><li ng-repeat="prop in datasource">{{ prop }}</li></ul> ' +
      // '<button ng-click="action()">Change Data</button>'
    };

    return directiveObj;
  }

} ());


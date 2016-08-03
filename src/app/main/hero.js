(function () {
  'use strict';

  angular
    .module('testApp')
    .directive('heroPanel', heroPanel);

  /** @ngInject */
  function heroPanel () {
    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        intro: '@',
        ttl: '@',
        subtitle: '@',
        imgurl: '@',
        options: '='
      },
      templateUrl: '/app/main/hero-panel.html'
    };

    return directive;
  }

} ());

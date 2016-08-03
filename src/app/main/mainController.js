(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.ttl = 'I\'m powered by the MainController...';
    vm.intro = 'This information is currently in Japanese';
    vm.subtitle = 'But the subtitles are in French';

    vm.data = {
      ttl: 'Title for Options',
      intro: 'Intro for Option',
      subtitle: 'Subtitle for Options'
    };

  }

})();

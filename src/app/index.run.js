(function() {
  'use strict';

  angular
    .module('decider')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

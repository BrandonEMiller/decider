(function () {
  'use strict';

  angular
    .module('decider')
    .controller('MainController', function () {
      var self = this;

      self.title = 'Cant Decide?, Let Me do it for you.';

      self.options = [{}, {}, {}];

      //Randomize the random a bit
      var generateDecisionIndex = function(length){
        var array = [];
        var arrayLength = 1000;
        for(var i = 0; i < arrayLength; i++){
          array.push(Math.floor(Math.random() * length))
        }
        console.log(array);
        var index = Math.floor(Math.random() * arrayLength);
        return array[index];
      };


      self.makeDecision = function () {
        var options = self.options.filter(function (option) {
          return option.name;
        });

        var choice = generateDecisionIndex(options.length);

        self.decision = options[choice].name;
      }

    });
})();

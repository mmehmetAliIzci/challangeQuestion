if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var reg = new RegExp('([0-9])');
      return reg.test(str);
    },

    containsRepeatingLetter : function(str) {
      return (/([a-zA-Z]).*?\1/).test(str);
    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {
      return (/(^|\\*)([0-9]+)($|\\s)/).test(str)
    },

    matchesPattern : function(str) {
      return (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/).test(str);
    },
    isUSD : function(str) {

    }
  };
});

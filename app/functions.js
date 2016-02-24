if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      var concatFn = function(suffix) {
        return str + ', ' + suffix;
      };
      return concatFn;
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {
      var partialFn = function(stuff) {
        return fn(str1, str2, stuff);
      };
      return partialFn;
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;
      for (var i=0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      for (var i=0; i < arr.length; i++){
        if (arr[i] == item){
          arr.splice(i,1);
        }
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      var arr = arr1.concat(arr2);
      return arr;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var occurances = arr.filter(function(val){
          return val === item;
      }).length;
      return occurances;
    },

    duplicates : function(arr) {
      var sorted_arr = arr.sort();
      var results = [];
      for (var i = 0; i < arr.length - 1; i++) {
          if (sorted_arr[i + 1] == sorted_arr[i]) {
              if(results.indexOf(sorted_arr[i]) == -1){
                  results.push(sorted_arr[i]);
              }
          }
      }
      return results;
    },

    square : function(arr) {
      return arr.map(function (x) {
        return Math.pow(x, 2);
      });
    },

    findAllOccurrences : function(arr, target) {
      var indexes = [], i;
      for(i = 0; i < arr.length; i++)
          if (arr[i] === target)
              indexes.push(i);
      return indexes;
    }
  };
});

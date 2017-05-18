
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.loggester = factory();
    }
}(this, function () {
  var isNode = typeof window === 'undefined';

  var loggester = {
    logger: function(caller) {
      var self = this;
      caller = typeof caller === 'undefined' ? '' : caller;

      return function(message) {
        if (loggester.isProd) {
          return false;
        }

        for (var i = caller.length; i < 10; i++) {
          caller += ' ';
        }

        var args = isNode
          ? [caller + ':']
          : ['%c ' + caller, 'background: #111; color: #bada55; font-weight: bold'];

        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        console.log.apply(null, args);
      };
    },
    isProd: false
  };

  return loggester;
}));

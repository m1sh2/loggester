"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var isNode = typeof window === 'undefined';

  var Loggester = function () {
    function Loggester() {
      _classCallCheck(this, Loggester);

      var self = this;
      self.isProd = false;
      return function (name) {
        return function () {
          self.log(arguments, name);
        };
      };
    } // // TODO Depracate in future releases
    // self.logger = function(caller, len) {
    //   len = typeof len === 'undefined' ? 10 : len;
    //   caller = typeof caller === 'undefined' ? '' : caller;
    //
    //   return function(message) {
    //     if (loggester.isProd) {
    //       return false;
    //     }
    //
    //     for (var i = caller.length; i < len; i++) {
    //       caller += ' ';
    //     }
    //
    //     var args = isNode
    //       ? [caller + ':']
    //       : ['%c ' + caller, 'background: #111; color: #bada55; font-weight: bold'];
    //
    //     for (var i = 0; i < arguments.length; i++) {
    //       args.push(arguments[i]);
    //     }
    //
    //     console.log.apply(null, args);
    //   };
    // };


    _createClass(Loggester, [{
      key: "log",
      value: function log(args, name) {
        console.log('args', args);

        if (!args) {
          args = [];
        }

        if (name) {
          args = isNode ? ["%c ".concat(name, " "), 'background: dodgerblue; color: white; font-weight: bold;'].concat(_toConsumableArray(args)) : ["".concat(name, ": ")].concat(_toConsumableArray(args));
        }

        console.log.apply(null, args);
      }
    }]);

    return Loggester;
  }();

  var loggester = exports.loggester = new Loggester();
});
//# sourceMappingURL=loggester.js.map

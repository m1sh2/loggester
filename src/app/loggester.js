const isNode = typeof window === 'undefined';

class Loggester {
  constructor() {
    const self = this;
    self.isProd = false;

    return function(name) {
      return function() {
        self.log(arguments, name);
      }
    };
  }


  // // TODO Depracate in future releases
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

  log(args, name) {
    console.log('args', args);

    if (!args) {
      args = [];
    }

    if (name) {
      args = isNode
        ? [
          `%c ${name} `,
          'background: dodgerblue; color: white; font-weight: bold;',
          ...args
        ]
        : [`${name}: `, ...args];
    }

    console.log.apply(null, args);
  }
}

export const loggester = new Loggester();

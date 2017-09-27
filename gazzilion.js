(function() {
  // Steal some basic setup from underscore...
  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Create a safe reference to the Gazzilion object for use below.
  // Accept number in construct (i.e. Gazzilion(3456) ) and use it as
  // base number
  var Gazzilion = function(obj) {
    if (obj instanceof Gazzilion) {
      return obj;
    }
    if (!(this instanceof Gazzilion)) {
      Gazzilion._number = obj.toString();
      return Gazzilion;
    }
  };

  // Export the Gazzilion object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add 'Gazzilion' as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Gazzilion;
    }
    exports.Gazzilion = exports._n = Gazzilion;
  } else {
    root['Gazzilion'] = Gazzilion;
  }

  // Current version.
  Gazzilion.VERSION = '0.2.0';

  // helper functions
  var divide_and_concat = function(number, devider, round, concat) {
    var number = typeof number !== 'undefined' ? number : this.toString();
    number = Gazzilion.add_commas(number / devider, round);
    return parseFloat(number) == 0 ? '0' : number + concat;
  }

  var args_parser = function(object, args) {
    result = { number: 0, round: 0 }
    if (object instanceof Number) {
      result.round = args.length > 0 ? args[0] : 0;
      result.number = object.toString();
    } else {
      result.number = args.length > 0 ? args[0] : object.toString();
      result.round = args.length > 1 && typeof args[1] !== 'undefined' ? args[1] : 0;
    }
    return result;
  }

  Gazzilion.toString = function() {
    return Gazzilion._number.toString();
  }

  // Public methods

  Number.prototype.round = Gazzilion.round = function() {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;

    number = parseFloat(number) + '';
    if (round == 0) {
      Gazzilion._number = Math.round(number);
    } else {
      x = number.split('.');
      Gazzilion._number = (x.length > 1) ? ((parseInt(x[1].substring(0, round)) !== 0) ? x[0] + '.' + x[1].substring(0, round) : x[0]) : x[0];
    }
    return Gazzilion;
  }

  Number.prototype.add_commas = Gazzilion.add_commas = function() {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    number = Gazzilion.round(number, round) + '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  // Return 4K, 10K, 230M, 2B formatted number 
  Number.prototype.to_letter = Gazzilion.to_letter = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    if (number < 1000) {
      return Gazzilion.add_commas(number, round);
    } else if (number < 999000) {
      return Gazzilion.K(number, round);
    } else if (number < 999000000) {
      return Gazzilion.M(number, round);
    } else if (number < 999000000000) {
      return Gazzilion.B(number, round);
    } else {
      return 'gazzilion';
    }
  }

  // Return 10 thousand, 1 Million, 23 Billion formatted number 
  Number.prototype.to_word = Gazzilion.to_word = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    if (number < 1000) {
      return Gazzilion.add_commas(number, round);
    } else if (number < 999000) {
      return Gazzilion.thousand(number, round);
    } else if (number < 999000000) {
      return Gazzilion.million(number, round);
    } else if (number < 999000000000) {
      return Gazzilion.billion(number, round);
    } else {
      return 'gazzilion';
    }
  }

  Number.prototype.thousand = Gazzilion.thousand = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    return divide_and_concat(number, 1000, round, ' thousand');
  }

  Number.prototype.million = Gazzilion.million = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    return divide_and_concat(number, 1000000, round, ' million');
  }

  Number.prototype.billion = Gazzilion.billion = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    return divide_and_concat(number, 1000000000, round, ' billion');
  }

  Number.prototype.K = Gazzilion.K = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    return divide_and_concat(number, 1000, round, 'K');
  }

  Number.prototype.M = Gazzilion.M = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    return divide_and_concat(number, 1000000, round, 'M');
  }

  Number.prototype.B = Gazzilion.B = function(number, round) {
    var args = args_parser(this, arguments),
        number = args.number,
        round = args.round;
    return divide_and_concat(number, 1000000000, round, 'B');
  }
}).call(this);

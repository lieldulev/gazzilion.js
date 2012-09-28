(function() {

  // Steal some basic setup from underscore...
  
  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Create a safe reference to the Gazzilion object for use below.
  var Gazzilion = function(obj) {
    if (obj instanceof Gazzilion) return obj;
    if (!(this instanceof Gazzilion)) return new Gazzilion(obj);
  };

  // Export the Gazzilion object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add 'Gazzilion' as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Gazzilion;
    }
    exports.Gazzilion = Gazzilion;
  } else {
    root['Gazzilion'] = Gazzilion;
  }

  // Current version.
  Gazzilion.VERSION = '0.1.2';

  // helper functions
  var divide_and_concat = function(number, devider, round, concat){
    var number = Gazzilion.add_commas(number / devider, round);
    return parseFloat(number) == 0 ? '0' : number +' '+ concat;
  }

  // Public methods
  
  Gazzilion.round = function(number, round) {
    var round = typeof round !== 'undefined' ? round : 0;
    number = parseFloat(number)+'';
    if (round == 0) {
      return Math.round(number);
    }
    x = number.split('.');
    return (x.length > 1) ? ((parseInt(x[1]) !== 0) ? x[0] + '.' + x[1].substring(0,round) : x[0]) : x[0];
  }
  
  Gazzilion.add_commas = function(number, round)
  {
    var number = Gazzilion.round(number, round)+'';
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
  Gazzilion.to_letter = function(number, round) {
    if(number < 1000) {
      return Gazzilion.add_commas(number, round);
    } else if (number < 1000000) {
      return Gazzilion.K(number, round);      
    } else if (number < 1000000000) {
      return Gazzilion.M(number, round);      
    } else if (number < 1000000000000) {
      return Gazzilion.B(number, round);
    } else {
      return 'gazzilion';
    }
  }

  // Return 10 thousand, 1 Million, 23 Billion formatted number 
  Gazzilion.to_word = function(number, round) {
    if(number < 1000) {
      return Gazzilion.add_commas(number, round);
    } else if (number < 1000000) {
      return Gazzilion.thousand(number, round);      
    } else if (number < 1000000000) {
      return Gazzilion.million(number, round);
    } else if (number < 1000000000000) {
      return Gazzilion.billion(number, round);
    } else {
      return 'gazzilion';
    }
  }
  
  Gazzilion.thousand = function(number, round) {
    return divide_and_concat(number, 1000, round, 'thousand');
  }

  Gazzilion.million = function(number, round) {
    return divide_and_concat(number, 1000000, round, 'million');
  }

  Gazzilion.billion = function(number, round) {
    return divide_and_concat(number, 1000000000, round, 'billion');
  }

  Gazzilion.K = function(number, round) {
    return divide_and_concat(number, 1000, round, 'K');
  }

  Gazzilion.M = function(number, round) {
    return divide_and_concat(number, 1000000, round, 'M');
  }

  Gazzilion.B = function(number, round) {
    return divide_and_concat(number, 1000000000, round, 'B');
  }


}).call(this);

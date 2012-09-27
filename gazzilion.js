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
  Gazzilion.VERSION = '0.1.1';


  // Public methods
  
  Gazzilion.add_commas = function(nStr)
  {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  // Return 4K, 10K, 230M, 2B formatted number 
  Gazzilion.to_letter = function(number) {
    if(number < 1000) {
      return Math.round(number);
    } else if (number < 1000000) {
      return Math.round(number / 1000) + 'K'
    } else if (number < 1000000000) {
      return Math.round(number / 1000000) + 'M'
    } else if (number < 1000000000000) {
      return Math.round(number / 1000000000) + 'B'
    } else {
      return 'gazzilion';
    }
  }

  // Return 10 thousand, 1 Million, 23 Billion formatted number 
  Gazzilion.to_word = function(number) {
    if(number < 1000) {
      return Gazzilion.add_commas(Math.round(number));
    } else if (number < 1000000) {
      return Math.round(number / 1000) + ' thousand'
    } else if (number < 1000000000) {
      return Math.round(number / 1000000) + ' million'
    } else if (number < 1000000000000) {
      return Math.round(number / 1000000000) + ' billion'
    } else {
      return 'gazzilion';
    }
  }
  

}).call(this);

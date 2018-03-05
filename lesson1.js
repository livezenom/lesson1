function sum(a) {
    var allsum = a;
    function foo(b) {
        allsum += b;
      return foo;
    }
    foo.valueOf = function() {
      return allsum;
    };
  return foo;
  }
  console.log (sum(1)(2)(3)(4)(10)(-1));


  //polifill Object.create
  if (typeof Object.create != 'function') {
    Object.create = (function() {
      function Temp() {}        
      var hasOwn = Object.prototype.hasOwnProperty;
      return function (O) {
        if (typeof O != 'object') {
          throw TypeError('Object prototype may only be an Object or null');
        }
        Temp.prototype = O;
        var obj = new Temp();
        Temp.prototype = null; 
        if (arguments.length > 1) {
          var Properties = Object(arguments[1]);
          for (var prop in Properties) {
            if (hasOwn.call(Properties, prop)) {
              obj[prop] = Properties[prop];
            }
          }
        }
        return obj;
      };
    })();
  }
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
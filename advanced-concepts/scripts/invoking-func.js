var test = function(val) {
    console.log(val);
}
/*
test() => undefined
test(3) => 3
test(3,4) => 3
*/

var test2 = function(val) {
    console.log(this);
    console.log(val);
    console.log(arguments);
}
/*
test2() => window, undefined, .length: 0
test2(3) => window, 3, .length: 1
test2(3,4) => window, 3, .length: 2
*/

var test3 = function(val) {
    console.log(arguments[0]);
}
/*
test3(3,4) => 3
*/

var sumArgs = function() {
    var s = 0;
    for (var i=0; i<arguments.length; i++) {
        s += arguments[i];
    }
    console.log(s);
}
/*
umArgs(3,4,5)=> 12
*/
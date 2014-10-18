
var util = require("util");

var f = function (x) {
	return x * x;
};


var g = function (x) {
	return x + 1;
};

var fg = functools.chain(f, g);

var one = function (x, y) {
	deepEqual( fg( x ), y, util.format("fg( %s ) === %s", x, y) );
};

test( "chain", function () {

	one(0, 1);
	one(1, 4);
	one(2, 9);

});

import test from 'ava';
import * as functools from '../../src/index.js';

import util from "util" ;

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};


var one = function (t, x, y, z) {
	var msg;
	var g = functools.rpartial( f, [z] );
	var h = functools.rpartial( f, [y, z] );
	var i = functools.rpartial( f, [x, y, z] );

	msg = util.format("g( %s, %s ) === f( %s, %s, %s )", x, y, x, y, z)
	t.deepEqual(g( x, y ), f( x, y, z ), msg);

	msg = util.format("h( %s ) === f( %s, %s, %s )", x, x, y, z)
	t.deepEqual(h( x ), f( x, y, z ), msg);

	msg = util.format("i() === f( %s, %s, %s )", x, y, z)
	t.deepEqual(i(), f( x, y, z ), msg);
};

test( "rpartial", t => {

	one(t, 0, 0, 0);
	one(t, 1, 0, 0);
	one(t, 0, 1, 0);
	one(t, 0, 0, 1);
	one(t, 0, 3, 40);
	one(t, 13, 41, 97);

});

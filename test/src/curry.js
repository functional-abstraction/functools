import test from 'ava';
import * as functools from '../../src/index.js';

import util from "util" ;

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};

var g = functools.curry( f, f.length );

var one = function (t, x, y, z) {
	var msg, h;

	msg = util.format("g( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g( x, y, z ), f( x, y, z ), msg);

	msg = util.format("g( %s )( %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g( x )( y, z ), f( x, y, z ), msg);

	msg = util.format("g( %s )( %s )( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g( x )( y )( z ), f( x, y, z ), msg);

	msg = util.format("g( %s, %s )( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g( x, y )( z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g()()()( x, y, z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s )()( %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g()()()( x )()( y, z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g()()()( x )()( y )()( z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s, %s )()( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(g()()()( x, y )()( z ), f( x, y, z ), msg);

	h = g();

	msg = util.format("h( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h( x, y, z ), f( x, y, z ), msg);

	msg = util.format("h( %s )( %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h( x )( y, z ), f( x, y, z ), msg);

	msg = util.format("h( %s )( %s )( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h( x )( y )( z ), f( x, y, z ), msg);

	msg = util.format("h( %s, %s )( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h( x, y )( z ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h()()()( x, y, z ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s )()( %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h()()()( x )()( y, z ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h()()()( x )()( y )()( z ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s, %s )()( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	t.deepEqual(h()()()( x, y )()( z ), f( x, y, z ), msg);
};

test( "curry", t => {

	one(t, 0, 0, 0);
	one(t, 1, 0, 0);
	one(t, 0, 1, 0);
	one(t, 0, 0, 1);
	one(t, 0, 3, 40);
	one(t, 13, 41, 97);

});

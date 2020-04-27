import test from 'ava';
import * as functools from '../../src';

import util from "util" ;

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};

var g = functools.curry( f, f.length );

var one = function (x, y, z) {
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

	one(0, 0, 0);
	one(1, 0, 0);
	one(0, 1, 0);
	one(0, 0, 1);
	one(0, 3, 40);
	one(13, 41, 97);

});

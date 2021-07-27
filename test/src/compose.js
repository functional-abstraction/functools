import test from 'ava';
import * as functools from '../../src/index.js';

import util from "util" ;

var f = function ( x ) {
	return x * x ;
} ;


var g = function ( x ) {
	return x + 1 ;
} ;

var fg = functools.compose( [ f , g ] ) ;

var one = function ( t , x ) {
	t.deepEqual( fg( x ) , f( g( x ) ) , util.format("fg( %s ) === f( g( %s ) )" , x , x ) ) ;
} ;

test( "compose" , t => {

	one( t, 0 ) ;
	one( t, 1 ) ;
	one( t, 2 ) ;

} ) ;

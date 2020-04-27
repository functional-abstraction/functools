import test from 'ava';
import * as functools from '../../src';

import util from "util" ;

var f = function ( x ) {
	return x * x ;
} ;


var g = function ( x ) {
	return x + 1 ;
} ;

var fg = functools.chain( [ g , f ] ) ;

var one = function ( x ) {
	t.deepEqual( fg( x ) , f( g( x ) ) , util.format("fg( %s ) === f( g( %s ) )" , x , x ) ) ;
} ;

test( "chain" , t => {

	one( 0 ) ;
	one( 1 ) ;
	one( 2 ) ;

} ) ;

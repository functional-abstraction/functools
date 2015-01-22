
var util = require( "util" ) ;

var f = function ( x ) {
	return x * x ;
} ;


var g = function ( x ) {
	return x + 1 ;
} ;

var fg = functools.chain( f , g ) ;

var one = function ( x ) {
	deepEqual( fg( x ) , f( g( x ) ) , util.format("fg( %s ) === f( g( %s ) )" , x , x ) ) ;
} ;

test( "chain" , function ( ) {

	one( 0 ) ;
	one( 1 ) ;
	one( 2 ) ;

} ) ;

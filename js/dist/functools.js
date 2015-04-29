(function(exports, undefined){

	'use strict';


/* js/src/apply.js */


var apply = function ( fn , that , args ) {

	return Function.prototype.apply.call( fn , that , args ) ;

} ;

exports.apply = apply ;

/* js/src/bind.js */


var bind = function ( callable, that, args ) {

	args = [that].concat( args );

	return Function.prototype.bind.apply( callable, args );
};

exports.bind = bind;

/* js/src/chain.js */


var chain = function ( callables ) {

	var len = callables.length ;

	return function ( obj ) {

		for ( var i = 0 ; i < len ; ++i ) obj = callables[i]( obj ) ;

		return obj ;

	} ;

} ;

exports.chain = chain ;

/* js/src/compose.js */


var compose = function ( callables ) {

	var len = callables.length ;

	return function ( obj ) {

		var i = len ;

		while ( i-- ) obj = callables[i]( obj ) ;

		return obj ;

	} ;

} ;

exports.compose = compose ;

/* js/src/create.js */

var create = function ( fn ) {

	return new ( Function.prototype.bind.apply( fn , arguments ) )( ) ;

} ;

exports.create = create ;

/* js/src/curry.js */


var curry = function ( callable, arity ) {

	return function () {

		var fn, i, args;

		args = Array.prototype.slice.call( arguments, 0 );

		fn = bind( callable, this, args );

		i = arity - args.length;

		if ( i <= 0 ) {
			return fn();
		}

		else {
			return curry( fn, i );
		}

	};

};

exports.curry = curry;

/* js/src/gobble.js */


var gobble = function ( callable, n ) {

	return function () {

		var args;

		args = Array.prototype.slice.call( arguments, n );

		return Function.prototype.apply.call( callable, this, args );

	};

};

exports.gobble = gobble;

/* js/src/noop.js */


var noop = function () {
	// this block intentionally left empty
};

exports.noop = noop;

/* js/src/partial.js */


var partial = function ( callable , args ) {

	return bind( callable , undefined , args );

} ;

exports.partial = partial ;

/* js/src/rbind.js */


var rbind = function ( callable, that, args ) {

	var stack;

	stack = args.slice( 0 );

	return function () {

		var args, fn;

		args = Array.prototype.slice.call( arguments, 0 );

		args = [that].concat( args ).concat( stack );

		fn = Function.prototype.bind.apply( callable, args );

		return fn();
	};


};

exports.rbind = rbind;

/* js/src/rcurry.js */


var rcurry = function ( callable, arity ) {

	return function () {

		var fn, i, args;

		args = Array.prototype.slice.call( arguments, 0 );

		fn = rbind( callable, this, args );

		i = arity - args.length;

		if ( i <= 0 ) {
			return fn();
		}

		else {
			return rcurry( fn, i );
		}

	};

};

exports.rcurry = rcurry;

/* js/src/rpartial.js */


var rpartial = function ( callable, args ) {

	return rbind( callable, undefined, args );

};

exports.rpartial = rpartial;

/* js/src/star.js */


var star = function ( callable , args ) {

	return apply( callable , undefined , args ) ;

} ;

exports.star = star ;

/* js/src/starchain.js */


var starchain = function ( callables ) {

	var i , len , args ;

	args = [] ;

	len = callables.length ;

	for ( i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return chain( args ) ;

} ;

exports.starchain = starchain ;

/* js/src/starcompose.js */


var starcompose = function ( callables ) {

	var i , len , args ;

	args = [] ;

	len = callables.length ;

	for ( i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return compose( args ) ;

} ;

exports.starcompose = starcompose ;

})(typeof exports === 'undefined' ? this['functools'] = {} : exports);

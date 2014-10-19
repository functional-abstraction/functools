(function(exports, undefined){

	'use strict';


/* js/src/chain.js */


var chain = function () {

	var i, len, args;

	args = arguments;

	len = args.length;

	return function ( obj ) {

		i = len;

		while ( i-- ) {
			obj = args[i]( obj );
		}

		return obj;
	};

};

exports.chain = chain;

/* js/src/curry.js */


var curry = function ( callable, arity ) {

	return function () {

		var fn, i, args;

		args = Array.prototype.slice.call( arguments, 0 );

		fn = partial( callable, this, args );

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


var partial = function ( callable, that, args ) {

	args = [that].concat( args );

	return Function.prototype.bind.apply( callable, args );
};

exports.partial = partial;

/* js/src/rcurry.js */


var rcurry = function ( callable, arity ) {

	return function () {

		var fn, i, args;

		args = Array.prototype.slice.call( arguments, 0 );

		fn = rpartial( callable, this, args );

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


var rpartial = function ( callable, that, args ) {

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

exports.rpartial = rpartial;

/* js/src/star.js */

var star = function ( fn, args ) {

	return Function.prototype.apply.call( fn, this, args );

};

exports.star = star;

})(typeof exports === 'undefined' ? this['functools'] = {} : exports);

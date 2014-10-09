(function(exports, undefined){

	'use strict';


/* js/src/chain.js */


var chain = function () {

	var i, len, fn;

	len = arguments.length

	return function ( obj ) {

		i = len;

		while ( i-- ) {
			obj = arguments[i]( obj );
		}

		return obj;
	};

};

exports.chain = chain;

/* js/src/curry.js */


var curry = function ( callable, arity ) {

	var iter = function () {

		var len;

		len = arguments.length;

		arity -= len;

		callable = partial( callable, null, arguments );

		if ( arity <= 0 ) {
			return callable();
		}

		else {
			return iter;
		}

	}

	return iter;

};

exports.curry = curry;

/* js/src/noop.js */



var noop = function () {
	// this block intentionally left empty
};

exports.noop = noop;

/* js/src/partial.js */


var partial = function ( fn, that, args ) {

	args = [that].concat(args);

	return Function.prototype.bind.apply( fn, args );
};

exports.partial = partial;

/* js/src/rcurry.js */


var rcurry = function ( callable, arity ) {

	var iter = function () {

		var len;

		len = arguments.length;

		arity -= len;

		callable = rpartial( callable, null, arguments );

		if ( arity <= 0 ) {
			return callable();
		}

		else {
			return iter;
		}

	}

	return iter;

};

exports.rcurry = rcurry;

/* js/src/rpartial.js */


var rpartial = function ( fn, that, args ) {

	var stack;

	stack = args.slice( 0 );

	return function () {

		var args, fn;

		args = Array.prototype.slice.call( arguments, 0 );

		args = [that].concat( args ).concat( stack );

		fn = Function.prototype.bind.apply( fn, args );

		return fn();
	};


};

exports.rpartial = rpartial;

})(typeof exports === 'undefined' ? this['functools'] = {} : exports);

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

		var fn, i;

		fn = callable;
		i = arity;

		var iter = function () {

			var len, args;

			args = Array.prototype.slice.call( arguments, 0 );

			len = args.length;

			i -= len;

			fn = partial( fn, this, args );

			if ( i <= 0 ) {
				return fn();
			}

			else {
				return iter;
			}

		};

		return iter.apply( this, arguments );

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

	args = [that].concat(args);

	return Function.prototype.bind.apply( callable, args );
};

exports.partial = partial;

/* js/src/rcurry.js */


var rcurry = function ( callable, arity ) {

	return function () {

		var fn, i;

		fn = callable;
		i = arity;

		var iter = function () {

			var len, args;

			args = Array.prototype.slice.call( arguments, 0 );

			len = args.length;

			i -= len;

			fn = rpartial( fn, this, args );

			if ( i <= 0 ) {
				return fn();
			}

			else {
				return iter;
			}

		};

		return iter.apply( this, arguments );

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

})(typeof exports === 'undefined' ? this['functools'] = {} : exports);



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



var curry = function ( callable, arity ) {

	var iter = function () {

		var len, args;

		args = Array.prototype.slice.call( arguments, 0 );

		len = args.length;

		arity -= len;

		callable = partial( callable, null, args );

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



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

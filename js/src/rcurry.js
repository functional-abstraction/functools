

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

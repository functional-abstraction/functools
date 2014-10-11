

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

			fn = rpartial( fn, null, args );

			if ( i <= 0 ) {
				return fn();
			}

			else {
				return iter;
			}

		};

		return iter.apply( null, arguments );

	};

};

exports.rcurry = rcurry;

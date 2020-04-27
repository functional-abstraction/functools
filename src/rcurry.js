

export default function rcurry ( callable, arity ) {

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

}


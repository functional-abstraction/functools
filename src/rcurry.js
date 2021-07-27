import rbind from './rbind.js' ;

export default function rcurry ( callable, arity ) {

	return function () {

		const args = Array.prototype.slice.call( arguments, 0 );

		const fn = rbind( callable, this, args );

		const i = arity - args.length;

		if ( i <= 0 ) {
			return fn();
		}

		else {
			return rcurry( fn, i );
		}

	};

}



export default function bind ( callable, that, args ) {

	args = [that].concat( args );

	return Function.prototype.bind.apply( callable, args );
}


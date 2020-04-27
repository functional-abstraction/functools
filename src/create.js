
export default function create ( fn ) {

	return new ( Function.prototype.bind.apply( fn , arguments ) )( ) ;

}

import star from './star' ;
import compose from './compose' ;
import partial from './partial' ;

export default function starcompose ( callables ) {

	const args = [] ;

	const len = callables.length ;

	for ( let i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return compose( args ) ;

}


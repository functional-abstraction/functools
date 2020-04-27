import star from './star' ;
import chain from './chain' ;
import partial from './partial' ;

export default function starchain ( callables ) {

	const args = [] ;

	const len = callables.length ;

	for ( let i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return chain( args ) ;

}


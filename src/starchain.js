import star from './star.js' ;
import chain from './chain.js' ;
import partial from './partial.js' ;

export default function starchain ( callables ) {

	const args = [] ;

	const len = callables.length ;

	for ( let i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return chain( args ) ;

}


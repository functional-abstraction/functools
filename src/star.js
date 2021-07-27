import apply from './apply.js' ;

export default function star ( callable , args ) {

	return apply( callable , undefined , args ) ;

}


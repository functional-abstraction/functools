import bind from './bind' ;

export default function partial ( callable , args ) {

	return bind( callable , undefined , args );

}

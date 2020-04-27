

export default function apply ( fn , that , args ) {

	return Function.prototype.apply.call( fn , that , args ) ;

}


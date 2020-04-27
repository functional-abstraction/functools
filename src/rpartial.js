

export default function rpartial ( callable, args ) {

	return rbind( callable, undefined, args );

}


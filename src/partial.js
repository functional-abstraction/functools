import bind from './bind.js';

export default function partial(callable, args) {
	return bind(callable, undefined, args);
}

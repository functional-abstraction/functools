import star from './star.js';
import compose from './compose.js';
import partial from './partial.js';

export default function starcompose(callables) {
	const args = [];

	const len = callables.length;

	for (let i = 0; i < len; ++i) {
		args.push(partial(star, [callables[i]]));
	}

	return compose(args);
}

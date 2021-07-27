export default function chain(callables) {
	const len = callables.length;

	return function (obj) {
		for (let i = 0; i < len; ++i) obj = callables[i](obj);

		return obj;
	};
}

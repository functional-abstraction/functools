export default function compose(callables) {
	const len = callables.length;

	return function (obj) {
		let i = len;

		while (i--) obj = callables[i](obj);

		return obj;
	};
}

function big_homie(k, q, x) {
	if (k > q && k > x) {
		console.log(k);
	} else if (q > k && q > x) {
		console.log(q);
	} else if (x > k && x > q) {
		console.log(x);
	}
}
console.log(big_homie(5, 9, 8));
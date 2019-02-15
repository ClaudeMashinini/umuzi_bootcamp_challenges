function tri_area(k, q, x) {
	var peri = ((k + q + x) / 2);
	var area = Math.sqrt((peri*(peri - k)*(peri - q)*(peri - x)));
	return area;
} console.log(tri_area(9, 8, 7));
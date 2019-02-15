function clocker(number) {
	h = Math.floor(number / 60);
	m = (number % 60);
	return clocked = (h +" hours and "+ m +"minutes");
} console.log(clocker(450));
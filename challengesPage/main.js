document.addEventListener('DOMContentLoaded', (event) => {
   
  })
function check65() {
    var k = parseInt(document.getElementById("check65_1").value);
    var q = parseInt(document.getElementById("check65_2").value);
    console.log(k + " " + q);
	if (k === 65 || q === 65 || k + q === 65) {
        console.log(true);
        document.getElementById("check65_answer").innerHTML = "True";
	} else {
        console.log(false);
        document.getElementById("check65_answer").innerHTML = "False";
	}
}

function triarea() {
    var a = parseInt(document.getElementById("triarea_1").value);
    var b = parseInt(document.getElementById("triarea_2").value);
    var c = parseInt(document.getElementById("triarea_3").value);
    peri = (a + b +c) / 2;
    area = Math.sqrt((peri *(peri - a)*(peri - b)*(peri - c)));
    document.getElementById("triarea_answer").innerHTML = area;
  //  return area;
  console.log(area);
} 

function big_homie() {
	var k = parseInt(document.getElementById("").value);
   	var q = parseInt(document.getElementById("").value);
   	var x = parseInt(document.getElementById("").value);	
	
	if (k > q && k > x) {
		console.log(k);
	} else if (q > k && q > x) {
		console.log(q);
	} else if (x > k && x > q) {
		console.log(x);
	}
}
}

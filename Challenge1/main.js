document.addEventListener('DOMContentLoaded', (event) => {
   
  })
function check65() {
    var k = parseInt(document.getElementById("check65_1").value);
    var q = parseInt(document.getElementById("check65_2").value);
	if (k === 65 || q === 65 || k + q === 65) {
        //console.log(true);
        document.getElementById("check65_answer").innerHTML = "true";
	} else {
        //console.log(false);
        document.getElementById("check65_answer").innerHTML = "false";
	}
}

function triarea() {
    var a = parseInt(document.getElementById("triarea_1").value);
    var b = parseInt(document.getElementById("triarea_2").value);
    var c = parseInt(document.getElementById("triarea_3").value);
    peri = (a + b + c) / 2;
    area = Math.sqrt((peri *(peri - a)*(peri - b)*(peri - c)));
    document.getElementById("triarea_answer").innerHTML = area;
  //  return area;
 // console.log(area);
 } 

function big_homie() {
  	k = parseInt(document.getElementById("number_1").value);
   	q = parseInt(document.getElementById("number_2").value);
   	x = parseInt(document.getElementById("number_3").value);	
	
	if (k > q && k > x) {
		document.getElementById("biggest_number").innerHTML = k;
		//alert(k);
	} else if (q > k && q > x) {
		document.getElementById("biggest_number").innerHTML = q;  
		//alert(q);
	} else if (x > k && x > q) {
		document.getElementById("biggest_number").innerHTML = x;
		//alert(x);
	}
}

function clocker() {
  var number = parseInt(document.getElementById("number").value);

  h = Math.floor(number / 60);
  m = (number % 60);
  clocked = (h +" hours and "+ m +"minutes");
  document.getElementById("clocker").innerHTML = clocked;
} console.log(clocker(450));
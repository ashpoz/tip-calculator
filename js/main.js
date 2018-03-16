// Tip Calculator
// Adrian S. Haynes
// Version 1.0
// 3.10.18

// tip amount vars
var amount1 = .2;
var amount2 = .25;
var amount3 = .3;

// calculate Tip based on input
function calculateTip(input) {
	// get value of input
	var input = document.getElementById('total').value;
	// calculate tips and round to 2 decimal places
	var goodTip = (amount1 * input).toFixed(2);
	var greatTip = (amount2 * input).toFixed(2);
	var superTip = (amount3 * input).toFixed(2);
	// return in array
	var tips = [goodTip, greatTip, superTip];
	// convert to string
	tips = tips.toString();
	tips = tips.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	// load tips on page
	document.getElementById('output').innerHTML = tips;
}

// on button click, run function
document.getElementById('calculate').onclick = function() {
	calculateTip();
}


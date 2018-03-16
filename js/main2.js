// Tip Calculator
// Adrian S. Haynes
// Version 1.0
// 3.10.18

// tips array
var tipAmt = [.2, .25, .3];

function calculateTip() {
	var total = document.getElementById('total').value;
	var tip = tipAmt.map(x => x * total);
	for (var i = 0; i < tip.length; i++) {
		tip[i] = tip[i].toFixed(2);
		tip[i] = tip[i].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		tip[i] = tip[i].toString();
		tip[i] = '<div>' + tip[i] + '</div>';
		document.getElementById('output').innerHTML = tip.join("");

	}
}

document.getElementById('calculate').onclick = function() {
calculateTip();
}

// document.getElementById('calculate').onclick = function() {
// console.log(calculateTip);
// }
// on button click, run function
// document.getElementById('calculate').onclick = function() {
//     calculateTip;
// }
// // calculate Tip based on input
// function calculateTip(input) {
// 	// get value of input
// 	var input = document.getElementById('total').value;
// 	// calculate tips and round to 2 decimal places
// 	var goodTip = (amount1 * input).toFixed(2);
// 	var greatTip = (amount2 * input).toFixed(2);
// 	var superTip = (amount3 * input).toFixed(2);
// 	// return in array
// 	var tips = [goodTip, greatTip, superTip];
// 	// convert to string
// 	tips = tips.toString();
// 	tips = tips.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// 	// load tips on page
// 	document.getElementById('output').innerHTML = tips;
// }

// // on button click, run function
// document.getElementById('calculate').onclick = function() {
// 	calculateTip();
// }


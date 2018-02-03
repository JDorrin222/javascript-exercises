function add (add1, add2) {
	return add1 + add2;
}

function subtract (sub1, sub2) {
	return sub1 - sub2;
}

function sum (inputs) {
	let sum = 0;
	for(i = 0; i < inputs.length; i++){
		sum += inputs[i];
	}
	return sum;
}

function multiply (elements) {
let product = 1;
for(i = 0; i < elements.length; i++){
	product *= elements[i];
}
return product;
}

function power(pow1, pow2) {
	return pow1 ** pow2;
}

function factorial(num) {
	let factorial = 1;
	for(i = num; i > 0; i--){
			factorial *= i;
		}
return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

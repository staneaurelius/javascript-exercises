const add = function(numberOne, numberTwo) {
	return numberOne + numberTwo;
};

const subtract = function(number, subtractor) {
	return number - subtractor;
};

const sum = function(numberArray) {
	return numberArray.reduce((total, number) => total + number, 0);
};

const multiply = function(numberArray) {
  return numberArray.reduce((total, number) => total * number);
};

const power = function(number, powerNumber) {
	return number ** powerNumber;
};

const factorial = function(number) {
  let result = 1;
	for (let i=0; i<number; i++) {
    result *= i+1;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

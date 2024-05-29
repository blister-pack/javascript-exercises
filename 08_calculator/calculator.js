const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(sumArray) {
  let sumTotal = 0;
  for (const number of sumArray) {
    sumTotal += number;
  }
  return sumTotal;
};

const multiply = function(multiplyArray) {
  let multiplyTotal = 1;
  for (const number of multiplyArray) {
    multiplyTotal *= number;
  }
  return multiplyTotal;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function (a) {
  let factorialMult = 1;
  // if input is 0 returns 1, else calculates factorial
  return (a === 0) ? 1 : calcFactorial(a);
    
    function calcFactorial(a) {
      for (a; a > 0; a--) {
        factorialMult *= a;
      }
      return factorialMult;
    }
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

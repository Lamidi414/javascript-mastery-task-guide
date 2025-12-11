/**
 * Create a Function to Find the Maximum of Two Numbers
 * ---------------------------------------------------------------
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

 */

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let result = findMax(-5, -10);
console.log(result); // -5
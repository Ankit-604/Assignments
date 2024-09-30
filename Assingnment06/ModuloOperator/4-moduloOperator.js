//Create a program that takes a number as input and checks if it is even or odd using the modulo operator.

function isEven(n) {
  return n % 2 == 0;
}

let n = 2;

isEven(n) ? console.log("Even") : console.log("Odd");

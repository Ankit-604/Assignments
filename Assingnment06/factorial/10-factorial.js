//Write a program to calculate the factorial of a number using a while loop.

let n = 5;
let factorial = 1;

while (n > 1) {
  factorial = factorial * n;
  console.log(factorial);
  n--;
}

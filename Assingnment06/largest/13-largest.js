//Write a program to determine the largest of three numbers using nested if-else.

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log("The largest number is " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The largest number is " + num2);
} else {
  console.log("The largest number is " + num3);
}

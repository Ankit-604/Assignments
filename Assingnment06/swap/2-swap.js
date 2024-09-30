// Write a program to swap the values of two variables without using a third variable

let x = 10;
let y = 5;
console.log("Before Swapping: x =" + x + ", y=" + y);

x = x + y;

y = x - y;

x = x - y;

console.log("After Swapping: x =" + x + ", y=" + y);

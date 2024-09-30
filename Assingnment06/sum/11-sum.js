//Write a program that sums all numbers between 1 and 100 that are divisible by 5.

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    sum = sum + i;
  }
}

console.log("Sum of numbers divisible by 5 is " + sum);

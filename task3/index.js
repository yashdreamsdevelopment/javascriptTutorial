// Factorial of a number using do-while loop

let number = 5;
let counter = 1;
let factorial = 1;

do {
  factorial *= counter;
  counter++;
} while (counter <= number);

document.write("Factorial of " + number + " is " + factorial);

// Program to check if a number is prime or not using for loop

let number = 1;
let isPrime = true;

// check if number equals to 1
if (number === 1) {
  document.write("1 is neither prime nor composite number");
} else if (number > 1) {
  // check if number is greater than 1
  for (divider = 2; divider < number / 2; divider++) {
    if (number % divider === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    document.write(number + " , is a prime number");
  } else {
    document.write(number + " , is not a prime number");
  }
} else {
  document.write("The number is not a prime number");
}

//  program to check an Armstrong number of three digit
// 153 = 1^3 + 5^3 + 3^3

let number = 153;
let sum = 0;

let temp = number;
while (temp > 0) {
  let remainder = temp % 10;

  console.log(remainder);

  sum += Math.pow(remainder, 3);

  temp = parseInt(temp / 10);
}

if (sum === number) {
  document.write(number + " is an Armstrong number");
} else {
  document.write(number + " is not an Armstrong number");
}

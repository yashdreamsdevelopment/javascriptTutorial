const operator = prompt("Enter operator (+,-,*,/,%)");
const num1 = parseInt(prompt("Enter the first number"));
const num2 = parseInt(prompt("Enter the second number"));

let output;

switch (operator) {
  case "+":
    output = num1 + num2;
    break;
  case "-":
    output = num1 - num2;
    break;
  case "*":
    output = num1 * num2;
    break;
  case "/":
    output = num1 / num2;
    break;
  case "%":
    output = num1 % num2;
    break;
  default:
    output = "Something went wrong";
    break;
}

alert(`The output of operation is: ${output}`);

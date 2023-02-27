const buttons = document.getElementsByTagName("button");
const display = document.getElementsByClassName("display")[0];
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", clicked);
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});

equalsBtn.addEventListener("click", () => {
  let equation = display.value;

  console.log(equation);
  let answer = Math.round(eval(equation));
  display.value = answer;
});

function clicked(e) {
  const buttonValue = e.target.value;

  displayNumbers(buttonValue);
}

function displayNumbers(value) {
  if (!["=", "C"].includes(value)) {
    display.value += value;
  } else {
    console.log("herere");
  }
}

function selected() {
  const options = document.getElementById("one");
  const selectedOptionIndex = options.selectedIndex;
  const valueOfSelectedOption = options[selectedOptionIndex].value;

  if (valueOfSelectedOption === "Brendon Eich") {
    alert("The answer is right");
  } else {
    alert("The answer is wrong");
  }
}

console.log("Hello");

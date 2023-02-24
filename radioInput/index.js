function fun1() {
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");

  if (option1.checked == true) {
    alert(`The option selected is: ${option1.value}`);
  } else if (option2.checked == true) {
    alert(`The option selected is: ${option2.value}`);
  } else {
    alert("No option selected");
  }
}

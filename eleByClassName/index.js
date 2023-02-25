function func1() {
  const cls1Classes = document.getElementsByClassName("cls1");

  for (let index = 0; index < cls1Classes.length; index++) {
    cls1Classes[index].style.backgroundColor = "Yellow";
  }

  // cls1Classes[0].style.fontStyle = "italic";
  // cls1Classes[1].style.color = "blue";
  // cls1Classes[2].style.fontWeight = "Bolder";
}

const outSideVariable = 15;

function myFunction() {
  const temp = 10;
  document.write("<h1>" + temp + "</h1>");
  document.write("<h1>" + outSideVariable + "</h1>");
}
// ERROR: here the variable `temp` is not available
// document.write("<h1>" + temp + "</h1>");

myFunction();

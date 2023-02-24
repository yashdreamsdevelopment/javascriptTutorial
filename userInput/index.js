function print() {
  const name = document.getElementById("name").value;
  const pass = document.getElementById("password").value;

  if (pass === "pass@123") {
    alert("Logged in successfully");
  } else {
    alert("Wrong credentials");
  }
}

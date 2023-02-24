console.log("About Prototype");

// const information = {
//   Name: "Yashwant",
//   Subject: "JavaScript",
//   Address: "Pune",
// };

// console.log(information);

// WE CAN ADD PROPERTY OR METHOD TO AN EXISTING CONSTRUCTOR FUNCTION WITH THE HELP OF PROTOTYPE METHOD

function info(name, subject, address) {
  this.name = name;
  this.subject = subject;
  this.address = address;
}

info.prototype.getName = function () {
  return this.name;
};

info.prototype.getAddress = function () {
  return this.address;
};

info.prototype.grades = "A";

const person1 = new info("Yashwant", "Java", "Pune, MH");
console.log(person1);
console.log(person1.getName());
console.log(person1.getAddress());

const person2 = new info("elon", "AI", "Mars, sy");
console.log(person2);
console.log(person2.getName());
console.log(person2.getAddress());

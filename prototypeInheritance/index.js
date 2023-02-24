// const Employee = {
//   Post: function () {
//     return "A Software Developer";
//   },
//   changeName: function (name) {
//     this.name = name;
//   },
// };

// const employee1 = Object.create(Employee);
// employee1.name = "Yashwant";
// employee1.role = "Writer";
// employee1.changeName("Elon");
// console.log(employee1);

// const employee1 = Object.create(Employee, {
//   name: { value: "Yashwant", writable: true },
//   role: { value: "Programmer" },
// });
// employee1.changeName("Elon");
// console.log(employee1);

function Employee(name, id, salary) {
  this.name = name;
  this.id = id;
  this.salary = salary;
}

Employee.prototype.post = function () {
  return this.name + " is a content creator";
};

const yashwant = new Employee("Yashwant", 5524, 10000);
console.log(yashwant);

function Programmer(name, id, salary, language) {
  Employee.call(this, name, id, salary);
  this.language = language;
}

//
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

const elon = new Programmer("Elon", 4545, 100000, "Python");

console.log(elon);

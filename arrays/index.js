const car = ["Honda", "Kia", "Ford"];

for (let index = 0; index < 3; index++) {
  document.write("<h3>" + car[index] + "</h3>");
}

const fruits = new Array("Apple", "Banana", "Mango");
for (let index = 0; index < 3; index++) {
  document.write("<h3>" + fruits[index] + "</h3>");
}

car.push("Nissan");
car.pop();
car.pop();
car.push("Hyundai");
car.push(13);
for (let index = 0; index < car.length; index++) {
  console.log(car[index]);
}
